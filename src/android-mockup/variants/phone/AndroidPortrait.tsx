import React, { PropsWithChildren, useMemo } from "react";
import { ColorValue, StyleSheet, View } from "react-native";
import { IAndroidMockupVariantProps } from "../variants-interface";

export default function AndroidPortrait(props: PropsWithChildren<IAndroidMockupVariantProps>) {
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
					{/* status bar*/}
					<View style={styles.statusbarPortrait}>
						{/* camera - portrait */}
						<View style={styles.cameraPortrait} />
					</View>
					{/* screen content */}
					<View style={{ flex: 1 }}>
						<View style={{ flex: 1 }}>{props.children}</View>
					</View>

					{/* navigation bar - portrait - swipe */}
					{navigationBar === "swipe" && (
						<View style={styles.navigationPortraitSwipe}>
							<View style={styles.navigationSwipeBar} />
						</View>
					)}
					{/* navigation bar - portrait - bhr */}
					{navigationBar === "bhr" && (
						<View style={styles.navigationPortraitBHR}>
							<View style={styles.triangle} />
							<View style={styles.circle} />
							<View style={styles.square} />
						</View>
					)}

					{/* navigation bar - portrait - rhb */}
					{navigationBar === "rhb" && (
						<View style={styles.navigationPortraitBHR}>
							<View style={styles.square} />
							<View style={styles.circle} />
							<View style={styles.triangle} />
						</View>
					)}
				</View>
			</View>
			<View style={styles.volumePortrait} />
			<View style={styles.powerPortrait} />
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
		const sizeRatio = Math.round((screenWidth * size) / 1080);
		return Math.max(sizeRatio, 1);
	};

	const FRAME_WIDTH = getSizeWithRatio(30);
	const HALF_FRAME_WIDTH = Math.round(FRAME_WIDTH / 2);

	const mHeight = Math.round((screenWidth / 9) * 19.5);

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
		statusbarPortrait: {
			width: "100%",
			height: getSizeWithRatio(90),
			backgroundColor: statusbarColor,
			alignItems: "center",
		},
		navigationPortraitSwipe: {
			width: "100%",
			height: getSizeWithRatio(60),
			backgroundColor: statusbarColor,
			alignItems: "center",
			justifyContent: "center",
		},
		navigationSwipeBar: {
			backgroundColor: frameColor,
			borderRadius: getSizeWithRatio(100),
			width: getSizeWithRatio(350),
			height: getSizeWithRatio(15),
		},
		navigationPortraitBHR: {
			width: "100%",
			height: getSizeWithRatio(120),
			backgroundColor: statusbarColor,
			paddingHorizontal: getSizeWithRatio(260),
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-between",
		},
		volumePortrait: {
			position: "absolute",
			borderRadius: getSizeWithRatio(HALF_FRAME_WIDTH + 15) + HALF_FRAME_WIDTH,
			top: getSizeWithRatio(420),
			left: screenWidth + FRAME_WIDTH + Math.round(HALF_FRAME_WIDTH),
			width: getSizeWithRatio(HALF_FRAME_WIDTH) + HALF_FRAME_WIDTH,
			height: getSizeWithRatio(330),
			backgroundColor: frameColor,
		},
		powerPortrait: {
			position: "absolute",
			borderRadius: getSizeWithRatio(HALF_FRAME_WIDTH) + HALF_FRAME_WIDTH,
			top: getSizeWithRatio(900),
			left: screenWidth + FRAME_WIDTH + Math.round(HALF_FRAME_WIDTH),
			width: getSizeWithRatio(HALF_FRAME_WIDTH) + HALF_FRAME_WIDTH,
			height: getSizeWithRatio(180),
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
		cameraPortrait: {
			width: getSizeWithRatio(55),
			height: getSizeWithRatio(55),
			borderRadius: getSizeWithRatio(55),
			backgroundColor: frameColor,
			marginTop: getSizeWithRatio(20),
		},
	});
};
