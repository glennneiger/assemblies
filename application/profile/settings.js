import Colors from '../styles/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import UserProfile from './user_profile';
import UserSettings from './user_settings';
import UserTechnologies from './user_technologies';

import React, {
  ScrollView,
  Component,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  Image,
  TouchableOpacity,
  Dimensions,
  NativeModules,
  Navigator,
  InteractionManager,
  ActivityIndicatorIOS,
} from 'react-native';

let { width: deviceWidth, height: deviceHeight } = Dimensions.get('window');

const CUSTOM_CONFIG = Navigator.SceneConfigs.HorizontalSwipeJump;

class Settings extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      user: props.currentUser
    }
  }
  _changeProfile(user){
    this.setState({user: user})
  }
  render(){
    return (
      <View style={styles.container}>
        <Navigator
          initialRoute={{
            name: 'UserProfile'
          }}
          configureScene={(route, routeStack) => {
            return CUSTOM_CONFIG;
          }}
          renderScene={(route, navigator) => {
            if (route.name == 'UserTechnologies') {
              console.log('USER TECH')
              return (
                <UserTechnologies {...this.props} currentUser={this.state.user} navigator={navigator} changeProfile={this._changeProfile.bind(this)}/>
              )
            } else if (route.name == 'UserSettings'){
              return (
                <UserSettings {...this.props} currentUser={this.state.user} navigator={navigator} changeProfile={this._changeProfile.bind(this)}/>
              )
            } else  {
              return (
                <UserProfile {...this.props} currentUser={this.state.user} navigator={navigator}/>
              )
            }
          }}
        >
        </Navigator>
      </View>
    )
  }
}

let styles = {
  container: {
    flex: 1,
  }
}

module.exports = Settings;
