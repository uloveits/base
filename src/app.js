import Taro from '@tarojs/taro'
import '@tarojs/async-await'
import { Provider } from '@tarojs/mobx'
import Index from './pages/index'
import store from './store'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Taro.Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/index/auth/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#2c2c2c',
      selectedColor: '#c18346',
      borderStyle: 'white',
      backgroundColor: '#fff',
      list: [
        {
          pagePath: 'pages/index/index',
          iconPath: 'public/imgs/tab/home.png',
          selectedIconPath: 'public/imgs/tab/home-active.png',
          text: '首页'
        },
        {
          pagePath: 'pages/index/index',
          iconPath: 'public/imgs/tab/type.png',
          selectedIconPath: 'public/imgs/tab/type-active.png',
          text: '服务'
        },
        {
          pagePath: 'pages/index/index',
          iconPath: 'public/imgs/tab/shop.png',
          selectedIconPath: 'public/imgs/tab/shop-active.png',
          text: '消息'
        },
        {
          pagePath: 'pages/index/index',
          iconPath: 'public/imgs/tab/user.png',
          selectedIconPath: 'public/imgs/tab/user-active.png',
          text: '我的'
        }
      ]
    }
  }

  componentDidMount () {}



  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
