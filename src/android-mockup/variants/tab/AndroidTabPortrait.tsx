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
		navigationBarcolor,
		hideStatusBar,
		hideNavigationBar,
		transparentNavigationBar,
	} = props;
	const styles = useMemo(() => {
		return getStyles(
			screenWidth,
			screenRounded,
			frameColor,
			statusbarColor,
			navigationBarcolor,
		);
	}, [screenWidth, screenRounded, frameColor, statusbarColor, navigationBarcolor]);

	return (
		<View style={styles.container}>
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
	navigationBarcolor: ColorValue,
) => {
	const getSizeWithRatio = (size: number) => {
		const sizeRatio = Math.floor((screenWidth * size) / 1600);
		return Math.max(sizeRatio, 1);
	};

	const FRAME_WIDTH = getSizeWithRatio(100);
	const HALF_FRAME_WIDTH = Math.floor(FRAME_WIDTH / 2);

	const mHeight = Math.floor((screenWidth / 10) * 16);
	const widthAndFrame = screenWidth + FRAME_WIDTH * 2;
	const heightAndFrame = mHeight + FRAME_WIDTH * 2;

	const frameButtonWidth = Math.floor(FRAME_WIDTH * 0.7);
	const frameButtonPosition = screenWidth + FRAME_WIDTH + HALF_FRAME_WIDTH;

	const subItemSize = getSizeWithRatio(45);

	return StyleSheet.create({
		container: {
			width: widthAndFrame,
			height: heightAndFrame,
			borderRadius: screenRounded ? getSizeWithRatio(140) : getSizeWithRatio(30),
			backgroundColor: frameColor,
			marginRight: frameButtonWidth - HALF_FRAME_WIDTH + 1,
		},
		frame: {
			width: widthAndFrame,
			height: heightAndFrame,
			borderRadius: screenRounded ? getSizeWithRatio(140) : getSizeWithRatio(30),
			borderWidth: FRAME_WIDTH,
			borderColor: frameColor,
			overflow: "hidden",
		},
		screen: {
			width: screenWidth,
			height: mHeight,
			backgroundColor: "whitesmoke",
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
			backgroundColor: navigationBarcolor,
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
			backgroundColor: navigationBarcolor,
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
			borderRadius: FRAME_WIDTH,
			top: getSizeWithRatio(300),
			left: frameButtonPosition,
			width: frameButtonWidth,
			height: getSizeWithRatio(180),
			backgroundColor: frameColor,
		},
		volumePortrait: {
			position: "absolute",
			borderRadius: FRAME_WIDTH,
			top: getSizeWithRatio(600),
			left: frameButtonPosition,
			width: frameButtonWidth,
			height: getSizeWithRatio(330),
			backgroundColor: frameColor,
		},
		triangle: {
			width: 0,
			height: 0,
			backgroundColor: "transparent",
			borderStyle: "solid",
			borderLeftWidth: subItemSize / 2,
			borderRightWidth: subItemSize / 2,
			borderBottomWidth: subItemSize,
			borderLeftColor: "transparent",
			borderRightColor: "transparent",
			borderBottomColor: frameColor,
			opacity: 0.6,
			transform: [{ rotate: "-90deg" }],
		},
		circle: {
			width: subItemSize,
			height: subItemSize,
			borderRadius: subItemSize,
			backgroundColor: frameColor,
			opacity: 0.6,
		},
		square: {
			width: subItemSize,
			height: subItemSize,
			borderRadius: subItemSize / 10,
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
