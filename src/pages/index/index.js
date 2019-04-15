import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './index.scss'


@inject('auth')
@observer
class Index extends Taro.Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () {
    // const {auth} = this.props;
    // if(!auth.check({block: true}))return;
  }



  render () {

    return (
      <View className='index'>

      </View>
    )
  }
}

export default Index
