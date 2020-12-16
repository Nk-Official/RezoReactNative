import React, {Component} from 'react';
import {View} from 'react-native';
import IntroScreenNavigator from '../Intro/IntroScreenNavigator';
import TabBarRezo from '../TabBar/tabBarRezo';
import ChooseLoginUserType from '../Registration/chooseLoginUserType';

class Splash extends Component {
  static data() {
    return {
      firstTime: true,
      login: false,
    };
  }

  render() {

    console.log('sdsd',this.constructor.data().firstTime)

    if (this.constructor.data().firstTime) {
      this.constructor.data().firstTime = false,
      return <IntroScreenNavigator />;
    } else if (this.constructor.data().login) {
      return <TabBarRezo />;
    } else {
      return <ChooseLoginUserType />;
    }
  }
}
export default Splash;
