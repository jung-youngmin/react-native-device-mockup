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
import {AndroidMockup, AndroidTabMockup} from './dist';

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
      <AndroidTabMockup
        isLandscape={false}
        screenWidth={240}
        screenRounded={true}
        navigationBar="bhr"
        isFullScreen={true}
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
      </AndroidTabMockup>
      <AndroidTabMockup
        isLandscape={true}
        screenWidth={360}
        screenRounded={true}
        isFullScreen={true}
        // containerStlye={{marginTop: 30, alignItems: 'center'}}
        containerStlye={{marginTop: 30}}
        navigationBar="rhb">
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
      </AndroidTabMockup>
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
