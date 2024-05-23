import React, { PropsWithChildren, useMemo } from "react";
import { ColorValue, StyleProp, View, ViewStyle } from "react-native";
import AndroidLandscape from "./variants/phone/AndroidLandscape";
import AndroidPortrait from "./variants/phone/AndroidPortrait";

interface IAndroidMockupProps {
	readonly screenWidth: number;
	/** default: false */
	readonly noRoundedScreen?: boolean;
	/** default: false */
	readonly isLandscape?: boolean;
	readonly containerStlye?: StyleProp<ViewStyle>;
	/** default: "#666666" */
	readonly frameColor?: ColorValue;
	/** default: false */
	readonly frameOnly?: boolean;
	/** default: "#CCCCCC" */
	readonly statusbarColor?: ColorValue;
	/** default: false */
	readonly hideStatusBar?: boolean;
	/** default: "swipe" */
	readonly navBar?: "swipe" | "bhr" | "rhb";
	/** default: "#CCCCCC" */
	readonly navBarcolor?: ColorValue;
	/** default: false */
	readonly transparentNavBar?: boolean;
	/** default: false */
	readonly hideNavBar?: boolean;
	/** default: false. Landscape only */
	readonly transparentCamArea?: boolean;
}

export type AndroidMockupProps = PropsWithChildren<IAndroidMockupProps>;
export default function AndroidMockup(props: AndroidMockupProps) {
	const noRoundedScreen = useMemo(() => {
		return props.noRoundedScreen === undefined ? false : props.noRoundedScreen;
	}, [props.noRoundedScreen]);

	const isLandscape = useMemo(() => {
		return props.isLandscape === undefined ? false : props.isLandscape;
	}, [props.isLandscape]);

	const frameColor = useMemo(() => {
		return props.frameColor === undefined ? "#666666" : props.frameColor;
	}, [props.frameColor]);

	const frameOnly = useMemo(() => {
		return props.frameOnly === undefined ? false : props.frameOnly;
	}, [props.frameOnly]);

	const statusbarColor = useMemo(() => {
		return props.statusbarColor === undefined ? "#CCCCCC" : props.statusbarColor;
	}, [props.statusbarColor]);

	const navigationBar = useMemo(() => {
		return props.navBar === undefined ? "swipe" : props.navBar;
	}, [props.navBar]);

	const navigationBarcolor = useMemo(() => {
		return props.navBarcolor === undefined ? "#CCCCCC" : props.navBarcolor;
	}, [props.navBarcolor]);

	const hideStatusBar = useMemo(() => {
		return props.hideStatusBar === undefined ? false : props.hideStatusBar;
	}, [props.hideStatusBar]);

	const transparentCamArea = useMemo(() => {
		return props.transparentCamArea === undefined ? false : props.transparentCamArea;
	}, [props.transparentCamArea]);

	const transparentNavigationBar = useMemo(() => {
		return props.transparentNavBar === undefined ? false : props.transparentNavBar;
	}, [props.transparentNavBar]);

	const hideNavigationBar = useMemo(() => {
		return props.hideNavBar === undefined ? false : props.hideNavBar;
	}, [props.hideNavBar]);

	return (
		<View style={props.containerStlye}>
			{isLandscape ? (
				<AndroidLandscape
					screenWidth={props.screenWidth}
					screenRounded={!noRoundedScreen}
					frameColor={frameColor}
					frameOnly={frameOnly}
					statusbarColor={statusbarColor}
					navigationBar={navigationBar}
					navigationBarcolor={navigationBarcolor}
					hideStatusBar={hideStatusBar}
					transparentCamArea={transparentCamArea}
					transparentNavigationBar={transparentNavigationBar}
					hideNavigationBar={hideNavigationBar}>
					{props.children}
				</AndroidLandscape>
			) : (
				<AndroidPortrait
					screenWidth={props.screenWidth}
					screenRounded={!noRoundedScreen}
					frameColor={frameColor}
					frameOnly={frameOnly}
					statusbarColor={statusbarColor}
					navigationBar={navigationBar}
					navigationBarcolor={navigationBarcolor}
					hideStatusBar={hideStatusBar}
					transparentNavigationBar={transparentNavigationBar}
					hideNavigationBar={hideNavigationBar}>
					{props.children}
				</AndroidPortrait>
			)}
		</View>
	);
}
