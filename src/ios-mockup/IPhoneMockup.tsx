import React, { PropsWithChildren, useMemo } from "react";
import { ColorValue, StyleProp, View, ViewStyle } from "react-native";
import IPhoneNotchPortrait from "./variants/phone/IPhoneNotchPortrait";
import IPhoneNotchLandscape from "./variants/phone/IPhoneNotchLandscape";
import IPhoneIslandPortrait from "./variants/phone/IPhoneIslandPortrait";
import IPhoneIslandLandscape from "./variants/phone/IPhoneIslandLandscape";
import IPhoneLegacyPortrait from "./variants/phone/IPhoneLegacyPortrait";
import IPhoneLegacyLandscape from "./variants/phone/IPhoneLegacyLandscape";

interface IiPhoneMockupProps {
	readonly screenWidth: number;
	/** default: "island" */
	readonly screenType?: "legacy" | "notch" | "island";
	/** default: false */
	readonly isLandscape?: boolean;
	readonly containerStlye?: StyleProp<ViewStyle>;
	/** default: "#666666" */
	readonly frameColor?: ColorValue;
	/** default: "#CCCCCC" */
	readonly statusbarColor?: ColorValue;
	/** default: false */
	readonly hideStatusBar?: boolean;
	/** default: false */
	readonly transparentNavBar?: boolean;
	/** default: false */
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
				// 무시
				// hideNavigationBar,
				// transparentNavigationBar,
				if (isLandscape) {
					// hideStatusBar 무시
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
				statusbarColor={statusbarColor}
				hideStatusBar={hideStatusBar}
				transparentNavigationBar={transparentNavigationBar}
				hideNavigationBar={hideNavigationBar}>
				{props.children}
			</Mockup>
		</View>
	);
}
