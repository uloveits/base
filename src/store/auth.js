import Taro from '@tarojs/taro';
import { observable } from 'mobx'
import {goView} from "../utils/commonFnc";
import common from './common'

import authApi from '../service/api/auth'

const CACHE_USER = 'cacheUser';
const expireLoginTime = 30 * 1000;

const auth = observable({
  user: initUser()
});

/**
 * 获取用户信息
 */
auth.check = function(param = {block: false, redirect: false}) {
  console.log(param.block);
  console.log(param.redirect);
  // 检查
  if (this.user) {
    return true
  } else {
    // 从未登录
    if (param.block) {
      goView('/pages/index/auth/index', {}, param.redirect)
    }
    return false
  }
};

auth.doLogin = function(token) {
  if (token) {
    return this.tokenLogin(token);
  }
}

auth.tokenLogin = function(token) {
  const user = authApi.tokenLogin(token)
  return this.saveUser(user);
}

auth.appLogin = async function(param) {
  const res = await authApi.appLogin(param);
  if(res.code === '200'){
    this.saveUser(res.user);
  }
  return res;
}


auth.mppLogin = async function(param) {
  const res = await authApi.wxLogin(param);
  console.log(res);
  if(res.code === '200'){
    this.saveUser(res.user, param.code);
  }
  return res.user;
};

auth.logout = function() {
  this.user = null;
  common.token = null;
  Taro.removeStorageSync(CACHE_USER)
}

auth.saveUser = function(user, code) {
  user.validTime = getTimestamp()
  this.user = user
  common.setToken(user.token)
  code&&common.setWxCode(code)
  Taro.setStorageSync(CACHE_USER, user)
};

auth.certify = function(customer) {
  const user = authApi.certify(customer);
  this.saveUser(user);
};


function initUser() {
  const user = Taro.getStorageSync(CACHE_USER)
  common.setToken(user.token);
  return user
}

function getTimestamp() {
  let timestamp = Date.parse(new Date());
  timestamp = timestamp / 1000;
  console.log("当前时间戳为：" + timestamp);
  return timestamp
}

function expired(data) {
  const now = getTimestamp();
  return (now - data.validTime > expireLoginTime)
}

export default auth
