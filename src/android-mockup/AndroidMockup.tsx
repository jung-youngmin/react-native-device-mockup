import React, { PropsWithChildren, useMemo } from "react";
import { ColorValue, StyleProp, View, ViewStyle } from "react-native";
import AndroidLandscape from "./variants/phone/AndroidLandscape";
import AndroidPortrait from "./variants/phone/AndroidPortrait";

interface IAndroidMockupProps {
	/**
	 * Width of mockup screen.
	 * The height is automatically calculated according to the ratio.
	 * - NOTE: It does not mean the full width of the mockup being rendered.
	 */
	readonly screenWidth: number;
	/**
	 * @default false
	 * @description No use rounded screen corners
	 */
	readonly noRoundedScreen?: boolean;
	/**
	 * @default false
	 * @description portrait or landscape. `false` means portrait
	 */
	readonly isLandscape?: boolean;
	/** Styles for mockup container */
	readonly containerStlye?: StyleProp<ViewStyle>;
	/**
	 * @default "#666666"
	 * @description Color of Frame
	 */
	readonly frameColor?: ColorValue;
	/**
	 * @default false
	 * @description Only the frame is shown. Power button and volume buttons are hidden
	 */
	readonly frameOnly?: boolean;
	/**
	 * @default "#CCCCCC"
	 * @description Color of status bar
	 */
	readonly statusbarColor?: ColorValue;
	/**
	 * @default false
	 * @description Hide the status bar
	 * - `false`: Status bar occupies its own space with `statusbarColor`. (default)
	 * - `true`: Status bar no longer occupies its own area, but becomes part of the screen area.
	 */
	readonly hideStatusBar?: boolean;
	/**
	 * @default "swipe"
	 * @description Type of navigation bar.
	 * - `"swipe"`: swipe gesture navigation bar. (modern style)
	 * - `"bhr"`: back-home-recent buttons. (classic style)
	 * - `"rhb"`: recent-home-back. (classic style)
	 */
	readonly navBar?: "swipe" | "bhr" | "rhb";
	/**
	 * @default "#CCCCCC"
	 * @description Color of navigation bar
	 */
	readonly navBarColor?: ColorValue;
	/**
	 * @default false
	 * @description Make the navigation bar transparent.
	 * - `false`: Navigation bar occupies its own space with `navBarColor`. (default)
	 * - `true`: Navigation bar no longer occupies its own area, but becomes part of the screen area.
	 * - NOTE: Swipe bar or buttons are rendered according to the type specified by `navBar` props.
	 */
	readonly transparentNavBar?: boolean;
	/**
	 * @default false
	 * @description Hide the navigation bar.
	 * - `false`: Show the navigation bar. (default)
	 * - `true`: Hide the navigation bar. Navigation bar no longer occupies its own area, but becomes part of the screen area.
	 * - NOTE: Swipe bar or buttons are **NOT** rendered according to the type specified by `navBar` props.
	 */
	readonly hideNavBar?: boolean;
	/**
	 * @default false
	 * @description Make the area around the camera transparent.
	 * - It only works when `isLandscape=true`.
	 * - It is ignored when `isLandscape=false`
	 */
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
		return props.navBarColor === undefined ? "#CCCCCC" : props.navBarColor;
	}, [props.navBarColor]);

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
