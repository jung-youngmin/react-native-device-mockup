import React, { PropsWithChildren, useMemo } from "react";
import { ColorValue, StyleSheet, View } from "react-native";
import { IAndroidMockupVariantProps } from "../variants-interface";

export default function AndroidTabLandscapeFullScreen(
	props: PropsWithChildren<IAndroidMockupVariantProps>,
) {
	const { screenRounded, frameColor, statusbarColor, navigationBar } = props;
	const styles = useMemo(() => {
		return getStyles(props.screenWidth, screenRounded, frameColor, statusbarColor);
	}, [props.screenWidth, screenRounded, frameColor, statusbarColor]);

	return (
		<View style={{}}>
			{/* frame */}
			<View style={styles.frame}>
				{/* screen */}
				<View style={styles.screen}>
					{/* screen content */}
					<View style={{ flex: 1 }}>
						<View style={{ flex: 1 }}>{props.children}</View>
					</View>
					{/* navigation bar - swipe */}
					{navigationBar === "swipe" && (
						<View pointerEvents="none" style={styles.navigationFullScreenPortraitSwipe}>
							<View style={styles.navigationSwipeBar} />
						</View>
					)}
					{/* navigation bar - landscape - bhr */}
					{navigationBar === "bhr" && (
						<View pointerEvents="none" style={styles.navigationLandscapeBHR}>
							<View style={styles.triangle} />
							<View style={styles.circle} />
							<View style={styles.square} />
						</View>
					)}
					{/* navigation bar - landscape - rhb */}
					{navigationBar === "rhb" && (
						<View pointerEvents="none" style={styles.navigationLandscapeBHR}>
							<View style={styles.square} />
							<View style={styles.circle} />
							<View style={styles.triangle} />
						</View>
					)}
				</View>
			</View>
			{/* camera - landscape */}
			<View style={styles.cameraLandscapeContainer}>
				<View style={styles.camera} />
			</View>
			<View style={styles.volumeLandscape} />
			<View style={styles.powerLandscape} />
		</View>
	);
}

const getStyles = (
	screenWidth: number,
	screenRounded: boolean,
	frameColor: ColorValue,
	statusbarColor: ColorValue,
) => {
	const getSizeWithRatio = (size: number) => {
		const sizeRatio = Math.round((screenWidth * size) / 2560);
		return Math.max(sizeRatio, 1);
	};

	const FRAME_WIDTH = getSizeWithRatio(100);
	const HALF_FRAME_WIDTH = Math.round(FRAME_WIDTH / 2);

	const mHeight = Math.round((screenWidth / 16) * 10);

	return StyleSheet.create({
		frame: {
			width: screenWidth + FRAME_WIDTH * 2,
			height: mHeight + FRAME_WIDTH * 2,
			borderRadius: screenRounded ? getSizeWithRatio(140) : getSizeWithRatio(30),
			borderWidth: FRAME_WIDTH,
			borderColor: frameColor,
			overflow: "hidden",
		},
		screen: {
			width: screenWidth,
			height: mHeight,
			backgroundColor: statusbarColor,
		},
		navigationSwipeBar: {
			backgroundColor: frameColor,
			borderRadius: getSizeWithRatio(100),
			width: getSizeWithRatio(350),
			height: getSizeWithRatio(15),
		},
		navigationLandscapeBHR: {
			position: "absolute",
			bottom: 0,
			width: "100%",
			height: getSizeWithRatio(80),
			paddingLeft: (screenWidth / 3) * 2,
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-evenly",
		},
		powerLandscape: {
			position: "absolute",
			borderRadius: getSizeWithRatio(HALF_FRAME_WIDTH) + HALF_FRAME_WIDTH,
			left: getSizeWithRatio(300),
			bottom: mHeight + FRAME_WIDTH + Math.round(HALF_FRAME_WIDTH),
			width: getSizeWithRatio(180),
			height: getSizeWithRatio(HALF_FRAME_WIDTH) + HALF_FRAME_WIDTH,
			backgroundColor: frameColor,
		},
		volumeLandscape: {
			position: "absolute",
			borderRadius: getSizeWithRatio(HALF_FRAME_WIDTH) + HALF_FRAME_WIDTH,
			left: getSizeWithRatio(600),
			bottom: mHeight + FRAME_WIDTH + Math.round(HALF_FRAME_WIDTH),
			width: getSizeWithRatio(330),
			height: getSizeWithRatio(HALF_FRAME_WIDTH) + HALF_FRAME_WIDTH,
			backgroundColor: frameColor,
		},
		triangle: {
			width: 0,
			height: 0,
			backgroundColor: "transparent",
			borderStyle: "solid",
			borderLeftWidth: getSizeWithRatio(45) / 2,
			borderRightWidth: getSizeWithRatio(45) / 2,
			borderBottomWidth: getSizeWithRatio(45),
			borderLeftColor: "transparent",
			borderRightColor: "transparent",
			borderBottomColor: frameColor,
			opacity: 0.6,
			transform: [{ rotate: "-90deg" }],
		},
		circle: {
			width: getSizeWithRatio(45),
			height: getSizeWithRatio(45),
			borderRadius: getSizeWithRatio(45),
			backgroundColor: frameColor,
			opacity: 0.6,
		},
		square: {
			width: getSizeWithRatio(45),
			height: getSizeWithRatio(45),
			borderRadius: getSizeWithRatio(45) / 10,
			backgroundColor: frameColor,
			opacity: 0.6,
		},
		cameraLandscapeContainer: {
			position: "absolute",
			top: 0,
			alignItems: "center",
			justifyContent: "center",
			width: screenWidth + FRAME_WIDTH + FRAME_WIDTH,
			height: FRAME_WIDTH,
		},
		camera: {
			width: getSizeWithRatio(40),
			height: getSizeWithRatio(40),
			borderRadius: getSizeWithRatio(40),
			backgroundColor: statusbarColor,
			opacity: 0.6,
		},
		navigationFullScreenPortraitSwipe: {
			position: "absolute",
			bottom: 0,
			width: "100%",
			height: getSizeWithRatio(60),
			alignItems: "center",
			justifyContent: "center",
		},
	});
};
