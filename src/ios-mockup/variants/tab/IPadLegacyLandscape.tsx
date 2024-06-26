import React, { PropsWithChildren, useMemo } from "react";
import { ColorValue, StyleSheet, View, ViewStyle } from "react-native";
import { IIosMockupVariantProps } from "../variants-interface";

export default function IPadLegacyLandscape(props: PropsWithChildren<IIosMockupVariantProps>) {
	const { screenWidth, frameColor, statusbarColor, hideStatusBar } = props;
	const styles = useMemo(() => {
		return getStyles(screenWidth, frameColor, statusbarColor);
	}, [screenWidth, frameColor, statusbarColor]);

	const flex1 = useMemo<ViewStyle>(() => {
		return { flex: 1 };
	}, []);

	return (
		<View style={styles.container}>
			<View style={styles.upperBezel}>
				<View style={styles.camSpeakerCont}>
					<View style={styles.camera} />
				</View>
			</View>
			{/* frame */}
			<View style={styles.frame}>
				{/* screen */}
				<View style={styles.screen}>
					{hideStatusBar === false && <View style={styles.statusbar} />}
					{/* screen content */}
					<View style={flex1}>{props.children}</View>
				</View>
			</View>
			<View style={styles.lowerBezel}>
				<View style={styles.homeButoon} />
			</View>
		</View>
	);
}

const getStyles = (screenWidth: number, frameColor: ColorValue, statusbarColor: ColorValue) => {
	const getSizeWithRatio = (size: number) => {
		const sizeRatio = Math.floor((screenWidth * size) / 1080);
		return Math.max(sizeRatio, 1);
	};

	const FRAME_WIDTH = getSizeWithRatio(35);

	const mHeight = Math.floor((screenWidth / 4) * 3);
	const heightAndFrame = mHeight + FRAME_WIDTH * 2;

	const upperBezelWidth = getSizeWithRatio(90);
	const lowerBezelWidth = getSizeWithRatio(90);

	const bezelRadius = getSizeWithRatio(40);

	return StyleSheet.create({
		container: {
			width: screenWidth + upperBezelWidth + lowerBezelWidth,
			height: heightAndFrame,
			borderRadius: bezelRadius,
			backgroundColor: frameColor,
			flexDirection: "row",
		},
		frame: {
			backgroundColor: frameColor,
			width: screenWidth,
			height: heightAndFrame,
			borderWidth: FRAME_WIDTH,
			borderColor: frameColor,
			borderLeftWidth: 0,
			borderRightWidth: 0,
		},
		upperBezel: {
			borderTopLeftRadius: bezelRadius,
			borderBottomLeftRadius: bezelRadius,
			height: heightAndFrame,
			width: upperBezelWidth,
			backgroundColor: frameColor,
			justifyContent: "center",
		},
		camSpeakerCont: {
			width: "100%",
			height: "100%",
			alignItems: "center",
			justifyContent: "center",
		},
		camera: {
			width: getSizeWithRatio(20),
			height: getSizeWithRatio(20),
			borderRadius: getSizeWithRatio(20),
			backgroundColor: statusbarColor,
		},
		lowerBezel: {
			borderTopRightRadius: bezelRadius,
			borderBottomRightRadius: bezelRadius,
			width: lowerBezelWidth,
			height: heightAndFrame,
			backgroundColor: frameColor,
			alignItems: "center",
			justifyContent: "center",
		},
		homeButoon: {
			width: getSizeWithRatio(55),
			height: getSizeWithRatio(55),
			backgroundColor: statusbarColor,
			borderRadius: getSizeWithRatio(55),
		},
		screen: {
			width: screenWidth,
			height: mHeight,
			backgroundColor: "whitesmoke",
		},
		statusbar: {
			width: "100%",
			height: getSizeWithRatio(20),
			backgroundColor: statusbarColor,
			alignItems: "center",
		},
	});
};
