import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Button } from 'react-native-elements';

import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import { createStackNavigator } from 'react-navigation';

import PersonalInfo from './PersonalInfo';


class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Text style={styles.getStartedText}>LINDA</Text> 
          </View>


          <View style={styles.getStartedContainer}>
            {/* {this._maybeRenderDevelopmentModeWarning()} */}
            <Text style={styles.tabBarInfoText}> Add Information </Text>    
            <Text style={styles.tabBarInfoText}> Get Verified </Text>         
            <Text style={styles.tabBarInfoText}> Access your Information anywhere on the globe </Text>    
          </View>          
        </ScrollView>

        <View style={styles.tabBarInfoContainer}>
          {/* <Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>

          <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
            <MonoText style={styles.codeHighlightText}>navigation/MainTabNavigator.js</MonoText>
          </View> */}
          <Button
            large
            rightIcon={{name: 'arrow-forward'}}
            title='GET STARTED HERE'
            color='#f8f9fa'
            backgroundColor='#1503ff'
            fontFamily='raleway'
            buttonStyle={styles.btnGettingStarted}
            onPress={() => this.props.navigation.navigate('Personal')}
            />
        </View>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}
//navigator to navigate through all the screeens that we have
//Pass props and update state here
const RootStack = createStackNavigator({
  Home: HomeScreen,
  Personal: PersonalInfo
})

export default class Home extends React.Component{
  render(){
    return <RootStack />
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#f8f9fa'
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20
  },
  getStartedContainer: {
    alignItems: 'flex-start',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 50,
    color: '#1503ff',
    textAlign: 'center',
    fontFamily: 'raleway'
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'left',
    color: '#1503ff',
    marginTop: 10,
    fontFamily: 'roboto'
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  btnGettingStarted:{
    borderRadius: 4,
  },
});
