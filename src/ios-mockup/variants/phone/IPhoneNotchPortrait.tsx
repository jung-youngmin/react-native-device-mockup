import React, { PropsWithChildren, useMemo } from "react";
import { ColorValue, StyleSheet, View } from "react-native";
import { IIosMockupVariantProps } from "../variants-interface";

export default function IPhoneNotchPortrait(props: PropsWithChildren<IIosMockupVariantProps>) {
	const {
		frameColor,
		statusbarColor,
		hideStatusBar,
		hideNavigationBar,
		transparentNavigationBar,
	} = props;
	const styles = useMemo(() => {
		return getStyles(props.screenWidth, frameColor, statusbarColor);
	}, [props.screenWidth, frameColor, statusbarColor]);

	return (
		<View>
			{/* frame */}
			<View style={styles.frame}>
				{/* screen */}
				<View style={styles.screen}>
					{hideStatusBar === false && (
						<View style={styles.notchContainer}>
							<View style={styles.notch}></View>
						</View>
					)}
					{/* screen content */}
					<View style={{ flex: 1 }}>{props.children}</View>
					{hideNavigationBar === false && transparentNavigationBar === false && (
						<View style={styles.swipeContainer}>
							<View style={styles.swipeBar} />
						</View>
					)}
				</View>
				{hideStatusBar && (
					<View pointerEvents="none" style={styles.notchContainerFullScreen}>
						<View style={styles.notch}></View>
					</View>
				)}
				{hideNavigationBar === false && transparentNavigationBar && (
					<View pointerEvents="none" style={styles.swipeContainerFullScreen}>
						<View style={styles.swipeBar} />
					</View>
				)}
			</View>
			<View style={styles.silenceSwitch} />
			<View style={styles.volumeUp} />
			<View style={styles.volumeDown} />
			<View style={styles.powerPortrait} />
		</View>
	);
}

const getStyles = (screenWidth: number, frameColor: ColorValue, statusbarColor: ColorValue) => {
	const getSizeWithRatio = (size: number) => {
		const sizeRatio = Math.floor((screenWidth * size) / 390);
		return Math.max(sizeRatio, 1);
	};

	const FRAME_WIDTH = getSizeWithRatio(14);
	const HALF_FRAME_WIDTH = Math.floor(FRAME_WIDTH / 2);

	const mHeight = Math.round((screenWidth / 9) * 19.5);

	return StyleSheet.create({
		frame: {
			width: screenWidth + FRAME_WIDTH * 2,
			height: mHeight + FRAME_WIDTH * 2,
			borderRadius: getSizeWithRatio(64),
			borderWidth: FRAME_WIDTH,
			borderColor: frameColor,
			overflow: "hidden",
		},
		screen: {
			width: screenWidth,
			height: mHeight,
			backgroundColor: statusbarColor,
		},
		notchContainerFullScreen: {
			position: "absolute",
			width: "100%",
			height: getSizeWithRatio(44),
			alignItems: "center",
		},
		notchContainer: {
			width: "100%",
			height: getSizeWithRatio(44),
			backgroundColor: statusbarColor,
			alignItems: "center",
		},
		notch: {
			width: getSizeWithRatio(160),
			height: getSizeWithRatio(31),
			backgroundColor: frameColor,
			borderBottomLeftRadius: getSizeWithRatio(20),
			borderBottomRightRadius: getSizeWithRatio(20),
		},
		swipeContainerFullScreen: {
			position: "absolute",
			bottom: 0,
			width: "100%",
			height: getSizeWithRatio(34),
			alignItems: "center",
			justifyContent: "flex-end",
		},
		swipeContainer: {
			width: "100%",
			height: getSizeWithRatio(34),
			backgroundColor: statusbarColor,
			alignItems: "center",
			justifyContent: "flex-end",
		},
		swipeBar: {
			backgroundColor: frameColor,
			borderRadius: getSizeWithRatio(100),
			width: "35%",
			height: getSizeWithRatio(7),
			marginBottom: getSizeWithRatio(10),
		},
		silenceSwitch: {
			position: "absolute",
			borderRadius: getSizeWithRatio(FRAME_WIDTH) + HALF_FRAME_WIDTH,
			top: getSizeWithRatio(165),
			left: -HALF_FRAME_WIDTH,
			width: getSizeWithRatio(FRAME_WIDTH) + HALF_FRAME_WIDTH,
			height: getSizeWithRatio(34),
			backgroundColor: frameColor,
		},
		volumeUp: {
			position: "absolute",
			borderRadius: getSizeWithRatio(FRAME_WIDTH) + HALF_FRAME_WIDTH,
			top: getSizeWithRatio(230),
			left: -HALF_FRAME_WIDTH,
			width: getSizeWithRatio(FRAME_WIDTH) + HALF_FRAME_WIDTH,
			height: getSizeWithRatio(65),
			backgroundColor: frameColor,
		},
		volumeDown: {
			position: "absolute",
			borderRadius: getSizeWithRatio(FRAME_WIDTH) + HALF_FRAME_WIDTH,
			top: getSizeWithRatio(315),
			left: -HALF_FRAME_WIDTH,
			width: getSizeWithRatio(FRAME_WIDTH) + HALF_FRAME_WIDTH,
			height: getSizeWithRatio(65),
			backgroundColor: frameColor,
		},
		powerPortrait: {
			position: "absolute",
			borderRadius: getSizeWithRatio(FRAME_WIDTH) + HALF_FRAME_WIDTH,
			top: getSizeWithRatio(250),
			left: screenWidth + FRAME_WIDTH + HALF_FRAME_WIDTH,
			width: getSizeWithRatio(FRAME_WIDTH) + HALF_FRAME_WIDTH,
			height: getSizeWithRatio(105),
			backgroundColor: frameColor,
		},
	});
};
