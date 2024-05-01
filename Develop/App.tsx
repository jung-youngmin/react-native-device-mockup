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
import {
  AndroidMockup,
  AndroidTabMockup,
  IPadMockup,
  IPhoneMockup,
} from './dist';

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
  const [showIpadLegacy, setShowIpadLegacy] = useState(false);
  const [showIpadModern, setShowIpadModern] = useState(false);

  const onPressAndPhone = useCallback(() => {
    setShowAndroidTab(false);
    setShowIphoneLegacy(false);
    setShowIphoneNotch(false);
    setShowIphoneIsland(false);
    setShowIpadLegacy(false);
    setShowIpadModern(false);

    setShowAndroidPhone(prev => !prev);
  }, []);

  const onPressAndTab = useCallback(() => {
    setShowAndroidPhone(false);

    setShowIphoneLegacy(false);
    setShowIphoneNotch(false);
    setShowIphoneIsland(false);
    setShowIpadLegacy(false);
    setShowIpadModern(false);

    setShowAndroidTab(prev => !prev);
  }, []);

  const onPressIphoneLegacy = useCallback(() => {
    setShowAndroidPhone(false);
    setShowAndroidTab(false);

    setShowIphoneNotch(false);
    setShowIphoneIsland(false);
    setShowIpadLegacy(false);
    setShowIpadModern(false);

    setShowIphoneLegacy(prev => !prev);
  }, []);

  const onPressIphoneNotch = useCallback(() => {
    setShowAndroidPhone(false);
    setShowAndroidTab(false);
    setShowIphoneLegacy(false);

    setShowIphoneIsland(false);
    setShowIpadLegacy(false);
    setShowIpadModern(false);

    setShowIphoneNotch(prev => !prev);
  }, []);

  const onPressIphoneIsland = useCallback(() => {
    setShowAndroidPhone(false);
    setShowAndroidTab(false);
    setShowIphoneLegacy(false);
    setShowIphoneNotch(false);

    setShowIpadLegacy(false);
    setShowIpadModern(false);

    setShowIphoneIsland(prev => !prev);
  }, []);

  const onPressIpadLegacy = useCallback(() => {
    setShowAndroidPhone(false);
    setShowAndroidTab(false);
    setShowIphoneLegacy(false);
    setShowIphoneNotch(false);
    setShowIphoneIsland(false);

    setShowIpadModern(false);

    setShowIpadLegacy(prev => !prev);
  }, []);

  const onPressIpadModern = useCallback(() => {
    setShowAndroidPhone(false);
    setShowAndroidTab(false);
    setShowIphoneLegacy(false);
    setShowIphoneNotch(false);
    setShowIphoneIsland(false);
    setShowIpadLegacy(false);

    setShowIpadModern(prev => !prev);
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
        <Text>Phone</Text>
        <ColorButton
          title="Android"
          isActive={showAndroidPhone}
          onPress={onPressAndPhone}
        />
        <ColorButton
          title="iPhone-legacy"
          isActive={showIphoneLegacy}
          onPress={onPressIphoneLegacy}
        />
        <ColorButton
          title="iPhone-notch"
          isActive={showIphoneNotch}
          onPress={onPressIphoneNotch}
        />
        <ColorButton
          title="iPhone-island"
          isActive={showIphoneIsland}
          onPress={onPressIphoneIsland}
        />
      </View>
      <View style={styles.buttons}>
        <Text>Tablet</Text>
        <ColorButton
          title="Android"
          isActive={showAndroidTab}
          onPress={onPressAndTab}
        />
        <ColorButton
          title="iPad-legacy"
          isActive={showIpadLegacy}
          onPress={onPressIpadLegacy}
        />
        <ColorButton
          title="iPad-modern"
          isActive={showIpadModern}
          onPress={onPressIpadModern}
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
      {showIpadLegacy && (
        <>
          <IPadMockup
            screenWidth={240}
            screenType="legacy"
            isLandscape={false}
            // hideStatusBar
            // transparentNavigationBar
            // hideNavigationBar
            // statusbarColor={'#dddddd'}
            containerStlye={mockupContainerStyle}>
            <ScreenDemo />
          </IPadMockup>
          <IPadMockup
            isLandscape={true}
            screenWidth={300}
            screenType="legacy"
            // hideStatusBar
            // hideNavigationBar
            // transparentNavigationBar
            containerStlye={mockupContainerStyle}>
            <ScreenDemo />
          </IPadMockup>
        </>
      )}
      {showIpadModern && (
        <>
          <IPadMockup
            screenWidth={300}
            screenType="modern"
            isLandscape={false}
            // hideStatusBar
            // transparentNavigationBar
            // hideNavigationBar
            // statusbarColor={'#dddddd'}
            containerStlye={mockupContainerStyle}>
            <ScreenDemo />
          </IPadMockup>
          <IPadMockup
            isLandscape={true}
            screenWidth={370}
            screenType="modern"
            // hideStatusBar
            // hideNavigationBar
            // transparentNavigationBar
            containerStlye={mockupContainerStyle}>
            <ScreenDemo />
          </IPadMockup>
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
      marginLeft: 4,
    };
  }, [isActive]);

  const titleStyle = useMemo<TextStyle>(() => {
    return {color: 'white', fontSize: 12};
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
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 10,
  },
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
