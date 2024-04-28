/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {AndroidMockup, AndroidTabMockup, IPhoneMockup} from './dist';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <IPhoneMockup
        screenWidth={240}
        screenType="island"
        isLandscape={false}
        // navigationBar="rhb"
        // hideStatusBar
        // transparentNavigationBar
        // hideNavigationBar
        // statusbarColor={'#dddddd'}
        containerStlye={{marginLeft: 20}}
        // containerStlye={{alignItems: 'center'}}
      >
        <TouchableHighlight
          style={{flex: 1}}
          underlayColor={'red'}
          onPress={() => {}}>
          <View style={styles.screenContainer}>
            <View style={styles.appRow}>
              <View style={styles.appIcon} />
              <View style={styles.appIcon} />
              <View style={styles.appIcon} />
              <View style={styles.appIcon} />
            </View>
            <View style={styles.appRow}>
              <View style={styles.appIcon} />
              <View style={styles.appIcon} />
              <View style={styles.appIcon} />
              <View style={styles.appIcon} />
            </View>
            <View style={styles.appRow}>
              <View style={styles.appIcon} />
              <View style={styles.appIcon} />
              <View style={styles.appIcon} />
              <View style={styles.appIcon} />
            </View>
          </View>
        </TouchableHighlight>
      </IPhoneMockup>
      <IPhoneMockup
        isLandscape={true}
        screenWidth={380}
        // hideStatusBar
        // hideNavigationBar
        // transparentNavigationBar
        containerStlye={{marginTop: 30, marginLeft: 10}}
        // navigationBar="rhb"
      >
        <TouchableHighlight
          style={{flex: 1}}
          underlayColor={'red'}
          onPress={() => {}}>
          <View style={styles.screenContainer}>
            <View style={styles.appRow}>
              <View style={styles.appIcon} />
              <View style={styles.appIcon} />
              <View style={styles.appIcon} />
              <View style={styles.appIcon} />
            </View>
            <View style={styles.appRow}>
              <View style={styles.appIcon} />
              <View style={styles.appIcon} />
              <View style={styles.appIcon} />
              <View style={styles.appIcon} />
            </View>
          </View>
        </TouchableHighlight>
      </IPhoneMockup>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#dddddd',
    paddingHorizontal: 8,
  },
  appRow: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  appIcon: {
    width: 36,
    height: 36,
    backgroundColor: '#777777',
    borderRadius: 8,
  },
});

export default App;
