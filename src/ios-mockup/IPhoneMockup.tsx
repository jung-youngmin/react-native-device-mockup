import React, { PropsWithChildren, useMemo } from "react";
import { ColorValue, StyleProp, View, ViewStyle } from "react-native";
import IPhoneNotchPortrait from "./variants/phone/IPhoneNotchPortrait";
import IPhoneNotchLandscape from "./variants/phone/IPhoneNotchLandscape";
import IPhoneIslandPortrait from "./variants/phone/IPhoneIslandPortrait";
import IPhoneIslandLandscape from "./variants/phone/IPhoneIslandLandscape";

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
	readonly transparentNavigationBar?: boolean;
	/** default: false */
	readonly hideNavigationBar?: boolean;
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
		return props.transparentNavigationBar === undefined
			? false
			: props.transparentNavigationBar;
	}, [props.transparentNavigationBar]);

	const hideNavigationBar = useMemo(() => {
		return props.hideNavigationBar === undefined ? false : props.hideNavigationBar;
	}, [props.hideNavigationBar]);

	const Mockup = useMemo(() => {
		switch (screenType) {
			case "legacy":
				if (isLandscape) {
					return IPhoneNotchLandscape;
				} else {
					return IPhoneNotchPortrait;
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
			{/* {isLandscape ? (
				<IPhoneNotchLandscape
					screenWidth={props.screenWidth}
					frameColor={frameColor}
					statusbarColor={statusbarColor}
					hideStatusBar={hideStatusBar}
					transparentNavigationBar={transparentNavigationBar}
					hideNavigationBar={hideNavigationBar}>
					{props.children}
				</IPhoneNotchLandscape>
			) : (
				<IPhoneNotchPortrait
					screenWidth={props.screenWidth}
					frameColor={frameColor}
					statusbarColor={statusbarColor}
					hideStatusBar={hideStatusBar}
					transparentNavigationBar={transparentNavigationBar}
					hideNavigationBar={hideNavigationBar}>
					{props.children}
				</IPhoneNotchPortrait>
			)} */}
			{/* <Mockup
				screenWidth={props.screenWidth}
				frameColor={frameColor}
				statusbarColor={statusbarColor}
				navigationBar={navigationBar}
				isFullScreen={isFullScreen}>
				{props.children}
			</Mockup> */}
		</View>
	);
}
