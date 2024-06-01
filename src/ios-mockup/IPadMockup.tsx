import React, { PropsWithChildren, useMemo } from "react";
import { ColorValue, StyleProp, View, ViewStyle } from "react-native";
import IPadLegacyLandscape from "./variants/tab/IPadLegacyLandscape";
import IPadLegacyPortrait from "./variants/tab/IPadLegacyPortrait";
import IPadModernLandscape from "./variants/tab/IPadModernLandscape";
import IPadModernPortrait from "./variants/tab/IPadModernPortrait";

interface IiPadMockupProps {
	/**
	 * Width of mockup screen.
	 * The height is automatically calculated according to the ratio.
	 * - NOTE: It does not mean the full width of the mockup being rendered.
	 */
	readonly screenWidth: number;
	/**
	 * @default "modern"
	 * @description
	 * - `"legacy"`: Classic iPad such as iPad 9th
	 * - `"modern"`: Modern iPad such as iPad Pro 13-inch
	 */
	readonly screenType?: "legacy" | "modern";
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
}

export type IPadMockupProps = PropsWithChildren<IiPadMockupProps>;
export default function IPadMockup(props: IPadMockupProps) {
	const screenType = useMemo(() => {
		return props.screenType === undefined ? "modern" : props.screenType;
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
					return IPadLegacyLandscape;
				} else {
					return IPadLegacyPortrait;
				}
			case "modern":
			default:
				if (isLandscape) {
					return IPadModernLandscape;
				} else {
					return IPadModernPortrait;
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
