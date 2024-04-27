import React, { PropsWithChildren, useMemo } from "react";
import { ColorValue, StyleSheet, View } from "react-native";
import { IAndroidMockupVariantProps } from "../variants-interface";

export default function AndroidLandscapeFullScreen(
	props: PropsWithChildren<IAndroidMockupVariantProps>,
) {
	const { screenRounded, frameColor, statusbarColor, navigationBar } = props;
	const styles = useMemo(() => {
		return getStyles(props.screenWidth, screenRounded, frameColor, statusbarColor);
	}, [props.screenWidth, screenRounded, frameColor, statusbarColor]);

	return (
		<View>
			{/* frame */}
			<View style={styles.frame}>
				{/* screen */}
				<View style={styles.screen}>
					{/* screen content */}
					<View style={{ flex: 1 }}>
						<View style={{ flex: 1 }}>{props.children}</View>
					</View>
					{/* camera - fullScreen - landscape */}
					<View style={styles.cameraFullScreenLandscape} />

					{/* navigation bar - fullScreen - landscape - swipe */}
					{navigationBar === "swipe" && (
						<View
							pointerEvents="none"
							style={styles.navigationFullScreenLandscapeSwipe}>
							<View style={styles.navigationFullScreenSwipeBar} />
						</View>
					)}

					{/* navigation bar - landscape - bhr */}
					{navigationBar === "bhr" && (
						<View pointerEvents="none" style={styles.navigationLandscapeBHR}>
							<View style={styles.square} />
							<View style={styles.circle} />
							<View style={styles.triangle} />
						</View>
					)}

					{/* navigation bar - landscape - rhb */}
					{navigationBar === "rhb" && (
						<View pointerEvents="none" style={styles.navigationLandscapeBHR}>
							<View style={styles.triangle} />
							<View style={styles.circle} />
							<View style={styles.square} />
						</View>
					)}
				</View>
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
		const sizeRatio = Math.round((screenWidth * size) / 2340);
		return Math.max(sizeRatio, 1);
	};

	const FRAME_WIDTH = getSizeWithRatio(30);
	const HALF_FRAME_WIDTH = Math.round(FRAME_WIDTH / 2);

	const mHeight = Math.round((screenWidth / 19.5) * 9);

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
			flexDirection: "row",
		},
		navigationLandscapeBHR: {
			position: "absolute",
			right: 0,
			width: getSizeWithRatio(120),
			height: "100%",
			paddingVertical: getSizeWithRatio(260),
			alignItems: "center",
			justifyContent: "space-between",
		},
		volumeLandscape: {
			position: "absolute",
			borderRadius: getSizeWithRatio(HALF_FRAME_WIDTH) + HALF_FRAME_WIDTH,
			left: getSizeWithRatio(420),
			bottom: mHeight + FRAME_WIDTH + Math.round(HALF_FRAME_WIDTH),
			width: getSizeWithRatio(330),
			height: getSizeWithRatio(HALF_FRAME_WIDTH) + HALF_FRAME_WIDTH,
			backgroundColor: frameColor,
		},
		powerLandscape: {
			position: "absolute",
			borderRadius: getSizeWithRatio(HALF_FRAME_WIDTH) + HALF_FRAME_WIDTH,
			left: getSizeWithRatio(900),
			bottom: mHeight + FRAME_WIDTH + Math.round(HALF_FRAME_WIDTH),
			width: getSizeWithRatio(180),
			height: getSizeWithRatio(HALF_FRAME_WIDTH) + HALF_FRAME_WIDTH,
			backgroundColor: frameColor,
		},
		triangle: {
			width: 0,
			height: 0,
			backgroundColor: "transparent",
			borderStyle: "solid",
			borderLeftWidth: getSizeWithRatio(55) / 2,
			borderRightWidth: getSizeWithRatio(55) / 2,
			borderBottomWidth: getSizeWithRatio(55),
			borderLeftColor: "transparent",
			borderRightColor: "transparent",
			borderBottomColor: frameColor,
			opacity: 0.6,
			transform: [{ rotate: "-90deg" }],
		},
		circle: {
			width: getSizeWithRatio(55),
			height: getSizeWithRatio(55),
			borderRadius: getSizeWithRatio(55),
			backgroundColor: frameColor,
			opacity: 0.6,
		},
		square: {
			width: getSizeWithRatio(55),
			height: getSizeWithRatio(55),
			borderRadius: getSizeWithRatio(55) / 10,
			backgroundColor: frameColor,
			opacity: 0.6,
		},
		cameraFullScreenLandscape: {
			position: "absolute",
			alignSelf: "center",
			verticalAlign: "middle",
			left: getSizeWithRatio(20),
			width: getSizeWithRatio(55),
			height: getSizeWithRatio(55),
			borderRadius: getSizeWithRatio(55),
			backgroundColor: frameColor,
		},
		navigationFullScreenLandscapeSwipe: {
			position: "absolute",
			bottom: 0,
			width: "100%",
			height: getSizeWithRatio(50),
			alignItems: "center",
			justifyContent: "center",
		},
		navigationFullScreenSwipeBar: {
			backgroundColor: frameColor,
			borderRadius: getSizeWithRatio(100),
			width: getSizeWithRatio(350),
			height: getSizeWithRatio(15),
		},
	});
};
