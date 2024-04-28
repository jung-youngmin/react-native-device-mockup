import React, { PropsWithChildren, useMemo } from "react";
import { ColorValue, StyleSheet, View } from "react-native";
import { IAndroidMockupVariantProps } from "../variants-interface";

export default function AndroidTabPortrait(props: PropsWithChildren<IAndroidMockupVariantProps>) {
	const {
		screenWidth,
		screenRounded,
		frameColor,
		statusbarColor,
		navigationBar,
		hideStatusBar,
		hideNavigationBar,
		transparentNavigationBar,
	} = props;
	const styles = useMemo(() => {
		return getStyles(screenWidth, screenRounded, frameColor, statusbarColor);
	}, [screenWidth, screenRounded, frameColor, statusbarColor]);

	return (
		<View style={{}}>
			{/* frame */}
			<View style={styles.frame}>
				{/* screen */}
				<View style={styles.screen}>
					{/* status bar */}
					{hideStatusBar === false && <View style={styles.statusbarPortrait}></View>}
					{/* screen content */}
					<View style={{ flex: 1 }}>
						<View style={{ flex: 1 }}>{props.children}</View>
					</View>
					{/* navigation bar - swipe */}
					{hideNavigationBar === false &&
						navigationBar === "swipe" &&
						(transparentNavigationBar ? (
							<View pointerEvents="none" style={styles.navigationSwipeTransparent}>
								<View style={styles.navigationSwipeBar} />
							</View>
						) : (
							<View style={styles.navigationSwipe}>
								<View style={styles.navigationSwipeBar} />
							</View>
						))}
					{/* navigation bar - portrait - bhr */}
					{hideNavigationBar === false &&
						navigationBar === "bhr" &&
						(transparentNavigationBar ? (
							<View
								pointerEvents="none"
								style={styles.navigationPortraitBhrTransparent}>
								<View style={styles.triangle} />
								<View style={styles.circle} />
								<View style={styles.square} />
							</View>
						) : (
							<View style={styles.navigationPortraitBHR}>
								<View style={styles.triangle} />
								<View style={styles.circle} />
								<View style={styles.square} />
							</View>
						))}

					{/* navigation bar - portrait - rhb */}
					{hideNavigationBar === false &&
						navigationBar === "rhb" &&
						(transparentNavigationBar ? (
							<View
								pointerEvents="none"
								style={styles.navigationPortraitBhrTransparent}>
								<View style={styles.square} />
								<View style={styles.circle} />
								<View style={styles.triangle} />
							</View>
						) : (
							<View style={styles.navigationPortraitBHR}>
								<View style={styles.square} />
								<View style={styles.circle} />
								<View style={styles.triangle} />
							</View>
						))}
				</View>
			</View>
			{/* camera - portrait */}
			<View style={styles.cameraPortraitContainer}>
				<View style={styles.camera} />
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
		const sizeRatio = Math.round((screenWidth * size) / 1600);
		return Math.max(sizeRatio, 1);
	};

	const FRAME_WIDTH = getSizeWithRatio(100);
	const HALF_FRAME_WIDTH = Math.round(FRAME_WIDTH / 2);

	const mHeight = Math.round((screenWidth / 10) * 16);

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
			height: getSizeWithRatio(50),
			backgroundColor: statusbarColor,
			alignItems: "center",
		},
		navigationSwipe: {
			width: "100%",
			height: getSizeWithRatio(60),
			backgroundColor: statusbarColor,
			alignItems: "center",
			justifyContent: "center",
		},
		navigationSwipeTransparent: {
			position: "absolute",
			bottom: 0,
			width: "100%",
			height: getSizeWithRatio(60),
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
			height: getSizeWithRatio(80),
			backgroundColor: statusbarColor,
			paddingLeft: screenWidth / 2,
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-evenly",
		},
		navigationPortraitBhrTransparent: {
			position: "absolute",
			bottom: 0,
			width: "100%",
			height: getSizeWithRatio(80),
			paddingLeft: screenWidth / 2,
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-evenly",
		},
		powerPortrait: {
			position: "absolute",
			borderRadius: getSizeWithRatio(HALF_FRAME_WIDTH) + HALF_FRAME_WIDTH,
			top: getSizeWithRatio(300),
			left: screenWidth + FRAME_WIDTH + Math.round(HALF_FRAME_WIDTH),
			width: getSizeWithRatio(HALF_FRAME_WIDTH) + HALF_FRAME_WIDTH,
			height: getSizeWithRatio(180),
			backgroundColor: frameColor,
		},
		volumePortrait: {
			position: "absolute",
			borderRadius: getSizeWithRatio(HALF_FRAME_WIDTH) + HALF_FRAME_WIDTH,
			top: getSizeWithRatio(600),
			left: screenWidth + FRAME_WIDTH + Math.round(HALF_FRAME_WIDTH),
			width: getSizeWithRatio(HALF_FRAME_WIDTH) + HALF_FRAME_WIDTH,
			height: getSizeWithRatio(330),
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
		cameraPortraitContainer: {
			position: "absolute",
			left: screenWidth + FRAME_WIDTH,
			alignItems: "center",
			justifyContent: "center",
			width: FRAME_WIDTH,
			height: "100%",
		},
		camera: {
			width: getSizeWithRatio(40),
			height: getSizeWithRatio(40),
			borderRadius: getSizeWithRatio(40),
			backgroundColor: statusbarColor,
			opacity: 0.6,
		},
	});
};
