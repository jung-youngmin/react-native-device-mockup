import React, { PropsWithChildren, useMemo } from "react";
import { ColorValue, StyleProp, View, ViewStyle } from "react-native";
import AndroidPortrait from "./variants/phone/AndroidPortrait";
import AndroidPortraitFullScreen from "./variants/phone/AndroidPortraitFullScreen";
import AndroidLandscapeFullScreen from "./variants/phone/AndroidLandscapeFullScreen";
import AndroidLandscape from "./variants/phone/AndroidLandscape";

interface IAndroidMockupProps {
	readonly screenWidth: number;
	/** default: true */
	readonly screenRounded?: boolean;
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
	readonly isFullScreen?: boolean;
}

export type AndroidMockupProps = PropsWithChildren<IAndroidMockupProps>;
export default function AndroidMockup(props: AndroidMockupProps) {
	const screenRounded = useMemo(() => {
		return props.screenRounded === undefined ? true : props.screenRounded;
	}, [props.screenRounded]);

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

	const isFullScreen = useMemo(() => {
		return props.isFullScreen === undefined ? false : props.isFullScreen;
	}, [props.isFullScreen]);

	const Mockup = useMemo(() => {
		if (isLandscape) {
			if (isFullScreen) {
				return AndroidLandscapeFullScreen;
			} else {
				return AndroidLandscape;
			}
		} else {
			if (isFullScreen) {
				return AndroidPortraitFullScreen;
			} else {
				return AndroidPortrait;
			}
		}
	}, [isLandscape, isFullScreen]);

	return (
		<View style={props.containerStlye}>
			<Mockup
				screenWidth={props.screenWidth}
				screenRounded={screenRounded}
				frameColor={frameColor}
				statusbarColor={statusbarColor}
				navigationBar={navigationBar}>
				{props.children}
			</Mockup>
		</View>
	);
}
