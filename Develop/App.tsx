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
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {AndroidMockup} from './dist';

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
      <AndroidMockup
        orientaion="portrait"
        screenWidth={200}
        screenRounded={true}
        navigationBar="rhb"
        containerStlye={{alignItems: 'center'}}>
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
      </AndroidMockup>
      <AndroidMockup
        orientaion="landscape"
        screenWidth={350}
        screenRounded={true}
        containerStlye={{marginTop: 30, alignItems: 'center'}}
        navigationBar="rhb">
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
      </AndroidMockup>
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
