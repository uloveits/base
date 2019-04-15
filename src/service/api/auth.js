import base from './base'

export default class authApi extends base {

  /**
   * token登录
   */
  static tokenLogin(token) {
    const url = `/login/${token}`;
    return this.get(url).then(data => data.result);
  }

  static appLogin(param) {
    return this.post('/login', param);
  }
  /**
   * 微信授权登录
   */
  static wxLogin(param) {
    return this.post('/login/wx', param);
  }

  static update(user) {
    return this.post('/user', user);
  }

  static pwd(user) {
    return this.post('/user/pwd', user);
  }

  /**
   * 发送验证码
   */
  static sms(phone, type = 0) {
    const url = `/login/code/${phone}/${type}`;
    return this.get(url);
  }

  static certify(customer) {
    const url = `/user/certify`;
    return this.post(url, customer);
  }

  static data() {
    return this.get('/user/data').then(data => data.result);
  }
}
