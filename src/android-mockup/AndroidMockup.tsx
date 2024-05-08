import React, { PropsWithChildren, useMemo } from "react";
import { ColorValue, StyleProp, View, ViewStyle } from "react-native";
import AndroidPortrait from "./variants/phone/AndroidPortrait";
import AndroidLandscape from "./variants/phone/AndroidLandscape";

interface IAndroidMockupProps {
	readonly screenWidth: number;
	/** default: false */
	readonly noRoundedScreen?: boolean;
	/** default: false */
	readonly isLandscape?: boolean;
	readonly containerStlye?: StyleProp<ViewStyle>;
	/** default: "#666666" */
	readonly frameColor?: ColorValue;
	/** default: "#CCCCCC" */
	readonly statusbarColor?: ColorValue;
	/** default: "swipe" */
	readonly navigationBar?: "swipe" | "bhr" | "rhb";
	/** default: false */
	readonly hideStatusBar?: boolean;
	/** default: false. Landscape only */
	readonly transparentCamArea?: boolean;
	/** default: false */
	readonly transparentNavigationBar?: boolean;
	/** default: false */
	readonly hideNavigationBar?: boolean;
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

	const statusbarColor = useMemo(() => {
		return props.statusbarColor === undefined ? "#CCCCCC" : props.statusbarColor;
	}, [props.statusbarColor]);

	const navigationBar = useMemo(() => {
		return props.navigationBar === undefined ? "swipe" : props.navigationBar;
	}, [props.navigationBar]);

	const hideStatusBar = useMemo(() => {
		return props.hideStatusBar === undefined ? false : props.hideStatusBar;
	}, [props.hideStatusBar]);

	const transparentCamArea = useMemo(() => {
		return props.transparentCamArea === undefined ? false : props.transparentCamArea;
	}, [props.transparentCamArea]);

	const transparentNavigationBar = useMemo(() => {
		return props.transparentNavigationBar === undefined
			? false
			: props.transparentNavigationBar;
	}, [props.transparentNavigationBar]);

	const hideNavigationBar = useMemo(() => {
		return props.hideNavigationBar === undefined ? false : props.hideNavigationBar;
	}, [props.hideNavigationBar]);

	return (
		<View style={props.containerStlye}>
			{isLandscape ? (
				<AndroidLandscape
					screenWidth={props.screenWidth}
					screenRounded={!noRoundedScreen}
					frameColor={frameColor}
					statusbarColor={statusbarColor}
					navigationBar={navigationBar}
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
					statusbarColor={statusbarColor}
					navigationBar={navigationBar}
					hideStatusBar={hideStatusBar}
					transparentNavigationBar={transparentNavigationBar}
					hideNavigationBar={hideNavigationBar}>
					{props.children}
				</AndroidPortrait>
			)}
		</View>
	);
}
