import Taro from '@tarojs/taro'
import '@tarojs/async-await'
import { LAYOUT } from "../app.constant"

const PAGE_LEVEL_LIMIT = 10;

function goView(url, params={}, redirect=false) {
  return gotoPage(url, params, redirect?{method:'redirectTo'}:{})
}

//去跳转
function gotoPage(url, params={}, options={}) {
  const pages = Taro.getCurrentPages();
  let method = options.method || 'navigateTo';
  if (url && typeof url === 'string') {
    if (method === 'navigateTo' && pages.length >= PAGE_LEVEL_LIMIT - 3) {
      method = 'redirectTo'
    }

    if (method === 'navigateToByForce') {
      method = 'navigateTo'
    }

    if (method === 'navigateTo' && pages.length === PAGE_LEVEL_LIMIT) {
      method = 'redirectTo'
    }

    let extend = '';
    for (let key in params) {
      extend += '&'+key+'='+params[key];
    }
    if (extend.length) {
      url += '?'+extend.substr(1, extend.length-1)
    }

    Taro[method]({url})
  }
}
//取得屏幕的尺寸
function getScreenSize() {
  let res = Taro.getSystemInfoSync();
  let _Size = {
    width:res.windowWidth,
    height:res.windowHeight
  }
  return _Size;
}
//字符串转数组
function stringToArr(str) {
  if(str) {
    let arr = [];
    arr = str.split('，');
    if(arr.length === 1) {
      arr = str.split(',');
    }
    let _arr = [];
    for(let i= 0; i< arr.length; i++) {
      let _value = arr[i];
      _arr.push(_value);
    }
    return  _arr;
  }else {
    return '';
  }
}
//数组转字符串
function arrToString(arr) {
  let _str = '';
  for(let i= 0; i< arr.length;i++) {
    if(i == arr.length - 1){
      _str += arr[i]
    }else {
      _str += arr[i] + ','
    }
  }
  return _str;
}
/*将价格从元转成分*/
function yuanToCent(yuan) {
  return yuan * 100;
}
/*将价格从分转成元*/
function centToYuan(cent) {
  return parseInt(cent)/100;
}

/**
 * 调用时不用把参数补全; getValue(array, key) 一样可以调用
 * @param array 数组
 * @param key 指定的数值
 * @returns {string|string|string}
 */
function getConstantValue(array, key, strKey, strValue) {
  let result = '';
  let _strKey = 'id';
  let _strValue = 'value';
  if(strKey) {
    _strKey = strKey;
  }
  if(strValue) {
    _strValue = strValue;
  }
  if (array) {
    for (let item of array) {
      if (key == item[_strKey]) {
        result = item[_strValue];
      }
    }
  }
  return result;
}

function compIs(c, ...types) {
  if (c && c.is) {
    let i = parseInt(c.is)
    if (types && types.length) {
      for (let j = 0; j < types.length; j++) {
        if (!(types[j]&i)) {
          return false
        }
      }
      return true
    }
  }
}

function compType(c, type) {
  if (c) {
    return parseInt(c.type) === type
  }
}
/**
 * @param {String|Number} value 要验证的字符串或数值
 * @param {*} validList 用来验证的列表
 */
function oneOf (value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value.url === validList[i].url) {
      return true
    }
  }
  return false
}

export {
  goView,
  gotoPage,
  getScreenSize,
  stringToArr,
  arrToString,
  yuanToCent,
  centToYuan,
  getConstantValue,
  compIs,
  compType,
  oneOf
}
