import React, { PropsWithChildren, useMemo } from "react";
import { ColorValue, StyleProp, View, ViewStyle } from "react-native";
import AndroidTabPortrait from "./variants/tab/AndroidTabPortrait";
import AndroidTabLandscape from "./variants/tab/AndroidTabLandscape";
import AndroidTabPortraitFullScreen from "./variants/tab/AndroidTabPortraitFullScreen";
import AndroidTabLandscapeFullScreen from "./variants/tab/AndroidTabLandscapeFullScreen";

interface IAndroidTabMockupProps {
	/** default: false */
	readonly isLandscape?: boolean;
	readonly screenWidth: number;
	/** default: true */
	readonly screenRounded?: boolean;
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

export type AndroidTabMockupProps = PropsWithChildren<IAndroidTabMockupProps>;
export default function AndroidTabMockup(props: AndroidTabMockupProps) {
	const isLandscape = useMemo(() => {
		return props.isLandscape === undefined ? false : props.isLandscape;
	}, [props.isLandscape]);

	const screenRounded = useMemo(() => {
		return props.screenRounded === undefined ? true : props.screenRounded;
	}, [props.screenRounded]);

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
				return AndroidTabLandscapeFullScreen;
			} else {
				return AndroidTabLandscape;
			}
		} else {
			if (isFullScreen) {
				return AndroidTabPortraitFullScreen;
			} else {
				return AndroidTabPortrait;
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
