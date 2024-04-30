/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useCallback, useMemo, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextStyle,
  TouchableHighlight,
  TouchableOpacity,
  useColorScheme,
  View,
  ViewStyle,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {AndroidMockup, AndroidTabMockup, IPhoneMockup} from './dist';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [showAndroidPhone, setShowAndroidPhone] = useState(false);
  const [showAndroidTab, setShowAndroidTab] = useState(false);
  const [showIphoneLegacy, setShowIphoneLegacy] = useState(false);
  const [showIphoneNotch, setShowIphoneNotch] = useState(false);
  const [showIphoneIsland, setShowIphoneIsland] = useState(false);

  const onPressAndPhone = useCallback(() => {
    setShowAndroidTab(false);
    setShowIphoneLegacy(false);
    setShowIphoneNotch(false);
    setShowIphoneIsland(false);

    setShowAndroidPhone(prev => !prev);
  }, []);

  const onPressAndTab = useCallback(() => {
    setShowAndroidPhone(false);

    setShowIphoneLegacy(false);
    setShowIphoneNotch(false);
    setShowIphoneIsland(false);

    setShowAndroidTab(prev => !prev);
  }, []);

  const onPressIphoneLegacy = useCallback(() => {
    setShowAndroidPhone(false);
    setShowAndroidTab(false);

    setShowIphoneNotch(false);
    setShowIphoneIsland(false);

    setShowIphoneLegacy(prev => !prev);
  }, []);

  const onPressIphoneNotch = useCallback(() => {
    setShowAndroidPhone(false);
    setShowAndroidTab(false);
    setShowIphoneLegacy(false);

    setShowIphoneIsland(false);

    setShowIphoneNotch(prev => !prev);
  }, []);

  const onPressIphoneIsland = useCallback(() => {
    setShowAndroidPhone(false);
    setShowAndroidTab(false);
    setShowIphoneLegacy(false);
    setShowIphoneNotch(false);

    setShowIphoneIsland(prev => !prev);
  }, []);

  const mockupContainerStyle = useMemo<ViewStyle>(() => {
    return {
      borderWidth: 1,
      marginLeft: 10,
      marginTop: 10,
      // alignItems: 'flex-end',
    };
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles.buttons}>
        <ColorButton
          title="A-Phone"
          isActive={showAndroidPhone}
          onPress={onPressAndPhone}
        />
        <ColorButton
          title="A-Tab"
          isActive={showAndroidTab}
          onPress={onPressAndTab}
        />
        <ColorButton
          title="i-legacy"
          isActive={showIphoneLegacy}
          onPress={onPressIphoneLegacy}
        />
        <ColorButton
          title="i-notch"
          isActive={showIphoneNotch}
          onPress={onPressIphoneNotch}
        />
        <ColorButton
          title="i-island"
          isActive={showIphoneIsland}
          onPress={onPressIphoneIsland}
        />
      </View>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {showAndroidPhone && (
        <>
          <AndroidMockup
            screenWidth={200}
            isLandscape={false}
            navigationBar="rhb"
            // hideStatusBar
            // transparentNavigationBar
            // hideNavigationBar
            // statusbarColor={'#dddddd'}
            containerStlye={mockupContainerStyle}>
            <ScreenDemo />
          </AndroidMockup>
          <AndroidMockup
            isLandscape={true}
            screenWidth={350}
            // hideStatusBar
            // hideNavigationBar
            // transparentNavigationBar
            navigationBar="bhr"
            containerStlye={mockupContainerStyle}>
            <ScreenDemo />
          </AndroidMockup>
        </>
      )}
      {showAndroidTab && (
        <>
          <AndroidTabMockup
            screenWidth={200}
            isLandscape={false}
            navigationBar="rhb"
            // hideStatusBar
            // transparentNavigationBar
            // hideNavigationBar
            // statusbarColor={'#dddddd'}
            containerStlye={mockupContainerStyle}>
            <ScreenDemo />
          </AndroidTabMockup>
          <AndroidTabMockup
            isLandscape={true}
            screenWidth={350}
            // hideStatusBar
            // hideNavigationBar
            // transparentNavigationBar
            navigationBar="bhr"
            containerStlye={mockupContainerStyle}>
            <ScreenDemo />
          </AndroidTabMockup>
        </>
      )}
      {showIphoneLegacy && (
        <>
          <IPhoneMockup
            screenWidth={200}
            screenType="legacy"
            isLandscape={false}
            // hideStatusBar
            // transparentNavigationBar
            // hideNavigationBar
            // statusbarColor={'#dddddd'}
            containerStlye={mockupContainerStyle}>
            <ScreenDemo />
          </IPhoneMockup>
          <IPhoneMockup
            isLandscape={true}
            screenWidth={290}
            screenType="legacy"
            // hideStatusBar
            // hideNavigationBar
            // transparentNavigationBar
            containerStlye={mockupContainerStyle}>
            <ScreenDemo />
          </IPhoneMockup>
        </>
      )}
      {showIphoneNotch && (
        <>
          <IPhoneMockup
            screenWidth={200}
            screenType="notch"
            isLandscape={false}
            // hideStatusBar
            // transparentNavigationBar
            // hideNavigationBar
            // statusbarColor={'#dddddd'}
            containerStlye={mockupContainerStyle}>
            <ScreenDemo />
          </IPhoneMockup>
          <IPhoneMockup
            isLandscape={true}
            screenWidth={380}
            screenType="notch"
            // hideStatusBar
            // hideNavigationBar
            // transparentNavigationBar
            containerStlye={mockupContainerStyle}>
            <ScreenDemo />
          </IPhoneMockup>
        </>
      )}
      {showIphoneIsland && (
        <>
          <IPhoneMockup
            screenWidth={200}
            screenType="island"
            isLandscape={false}
            // hideStatusBar
            // transparentNavigationBar
            // hideNavigationBar
            // statusbarColor={'#dddddd'}
            containerStlye={mockupContainerStyle}>
            <ScreenDemo />
          </IPhoneMockup>
          <IPhoneMockup
            isLandscape={true}
            screenWidth={380}
            screenType="island"
            // hideStatusBar
            // hideNavigationBar
            // transparentNavigationBar
            containerStlye={mockupContainerStyle}>
            <ScreenDemo />
          </IPhoneMockup>
        </>
      )}
    </SafeAreaView>
  );
}

const ColorButton = ({
  title,
  isActive,
  onPress,
}: {
  title: string;
  isActive: boolean;
  onPress: () => void;
}) => {
  const buttonStyle = useMemo<ViewStyle>(() => {
    return {
      backgroundColor: isActive ? 'dodgerblue' : 'lightgray',
      borderRadius: 8,
      padding: 8,
    };
  }, [isActive]);

  const titleStyle = useMemo<TextStyle>(() => {
    return {color: 'white'};
  }, []);

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={buttonStyle}>
        <Text style={titleStyle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const _ScreenDemo = () => {
  return (
    <TouchableHighlight
      // eslint-disable-next-line react-native/no-inline-styles
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
  );
};
const ScreenDemo = React.memo(_ScreenDemo);

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  screenContainer: {
    flex: 1,
    backgroundColor: '#dddddd',
    // backgroundColor: 'green',
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
