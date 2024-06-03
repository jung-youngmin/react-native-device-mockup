import React, { PropsWithChildren, useMemo } from "react";
import { ColorValue, StyleProp, View, ViewStyle } from "react-native";
import IPhoneIslandLandscape from "./variants/phone/IPhoneIslandLandscape";
import IPhoneIslandPortrait from "./variants/phone/IPhoneIslandPortrait";
import IPhoneLegacyLandscape from "./variants/phone/IPhoneLegacyLandscape";
import IPhoneLegacyPortrait from "./variants/phone/IPhoneLegacyPortrait";
import IPhoneNotchLandscape from "./variants/phone/IPhoneNotchLandscape";
import IPhoneNotchPortrait from "./variants/phone/IPhoneNotchPortrait";

interface IiPhoneMockupProps {
	/**
	 * Width of mockup screen.
	 * The height is automatically calculated according to the ratio.
	 * - NOTE: It does not mean the full width of the mockup being rendered.
	 */
	readonly screenWidth: number;
	/**
	 * @default "island"
	 * @description
	 * - `"island"`: Dynamic island iPhone such as iPhone 15 Pro
	 * - `"notch"`: Notched iPhone such as iPhone 14
	 * - `"legacy"`: Classic iphone such as iPhone SE3
	 */
	readonly screenType?: "legacy" | "notch" | "island";
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
	 * - NOTE: When `isLandscape=true` and `screenType="legacy"` in `iPhoneMockup`,
	 * the status bar is always hidden regardless of `hideStatusBar`.
	 * Even on the REAL classic iPhone, the status bar is always hidden when in landscape
	 */
	readonly hideStatusBar?: boolean;
	/**
	 * @default false
	 * @description Make the navigation bar transparent.
	 * - `false`: Navigation bar occupies its own space with `navBarColor`. (default)
	 * - `true`: Navigation bar no longer occupies its own area, but becomes part of the screen area.
	 * - NOTE: Swipe bar or buttons are rendered according to the type specified by `navBar` props.
	 * - NOTE: When `screenType="legacy"` in `iPhoneMockup`, `transparentNavBar` is always ignored.
	 */
	readonly transparentNavBar?: boolean;
	/**
	 * @default false
	 * @description Hide the navigation bar.
	 * - `false`: Show the navigation bar. (default)
	 * - `true`: Hide the navigation bar. Navigation bar no longer occupies its own area, but becomes part of the screen area.
	 * - NOTE: Swipe bar or buttons are **NOT** rendered according to the type specified by `navBar` props.
	 * - NOTE: When `screenType="legacy"` in `iPhoneMockup`, `hideNavBar` is always ignored.
	 */
	readonly hideNavBar?: boolean;
}

export type IPhoneMockupProps = PropsWithChildren<IiPhoneMockupProps>;
export default function IPhoneMockup(props: IPhoneMockupProps) {
	const screenType = useMemo(() => {
		return props.screenType === undefined ? "island" : props.screenType;
	}, [props.screenType]);

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

	const hideStatusBar = useMemo(() => {
		return props.hideStatusBar === undefined ? false : props.hideStatusBar;
	}, [props.hideStatusBar]);

	const transparentNavigationBar = useMemo(() => {
		return props.transparentNavBar === undefined ? false : props.transparentNavBar;
	}, [props.transparentNavBar]);

	const hideNavigationBar = useMemo(() => {
		return props.hideNavBar === undefined ? false : props.hideNavBar;
	}, [props.hideNavBar]);

	const Mockup = useMemo(() => {
		switch (screenType) {
			case "legacy":
				if (isLandscape) {
					return IPhoneLegacyLandscape;
				} else {
					return IPhoneLegacyPortrait;
				}
			case "notch":
				if (isLandscape) {
					return IPhoneNotchLandscape;
				} else {
					return IPhoneNotchPortrait;
				}
			case "island":
			default:
				if (isLandscape) {
					return IPhoneIslandLandscape;
				} else {
					return IPhoneIslandPortrait;
				}
		}
	}, [isLandscape, screenType]);

	return (
		<View style={props.containerStlye}>
			<Mockup
				screenWidth={props.screenWidth}
				frameColor={frameColor}
				frameOnly={frameOnly}
				statusbarColor={statusbarColor}
				hideStatusBar={hideStatusBar}
				transparentNavigationBar={transparentNavigationBar}
				hideNavigationBar={hideNavigationBar}>
				{props.children}
			</Mockup>
		</View>
	);
}
