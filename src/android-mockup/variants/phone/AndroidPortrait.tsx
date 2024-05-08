import React, { PropsWithChildren, useMemo } from "react";
import { ColorValue, StyleSheet, View } from "react-native";
import { IAndroidMockupVariantProps } from "../variants-interface";

export default function AndroidPortrait(props: PropsWithChildren<IAndroidMockupVariantProps>) {
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
					{/* status bar*/}
					{hideStatusBar === false && (
						<View style={styles.statusbarPortrait}>
							{/* camera - portrait */}
							<View style={styles.cameraPortrait} />
						</View>
					)}
					{/* screen content */}
					<View style={{ flex: 1 }}>{props.children}</View>
					{/* camera - fullScreen - portrait */}
					{hideStatusBar && <View style={styles.cameraFullScreenPortrait} />}

					{/* navigation bar - swipe */}
					{hideNavigationBar === false &&
						navigationBar === "swipe" &&
						(transparentNavigationBar ? (
							<View
								pointerEvents="none"
								style={styles.navigationFullScreenPortraitSwipe}>
								<View style={styles.navigationSwipeBar} />
							</View>
						) : (
							<View style={styles.navigationPortraitSwipe}>
								<View style={styles.navigationSwipeBar} />
							</View>
						))}

					{/* navigation bar - bhr */}
					{hideNavigationBar === false &&
						navigationBar === "bhr" &&
						(transparentNavigationBar ? (
							<View
								pointerEvents="none"
								style={styles.navigationPortraitBhrTransParent}>
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

					{/* navigation bar - rhb */}
					{hideNavigationBar === false &&
						navigationBar === "rhb" &&
						(transparentNavigationBar ? (
							<View
								pointerEvents="none"
								style={styles.navigationPortraitBhrTransParent}>
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
		const sizeRatio = Math.floor((screenWidth * size) / 1080);
		return Math.max(sizeRatio, 1);
	};

	const FRAME_WIDTH = getSizeWithRatio(32);
	const HALF_FRAME_WIDTH = Math.floor(FRAME_WIDTH / 2);

	const mHeight = Math.floor((screenWidth / 9) * 19.5);
	const widthAndFrame = screenWidth + FRAME_WIDTH * 2;
	const heightAndFrame = mHeight + FRAME_WIDTH * 2;

	const frameButtonWidth = Math.floor(FRAME_WIDTH * 0.9);
	const frameButtonPosition = screenWidth + FRAME_WIDTH + HALF_FRAME_WIDTH;

	const subItemSize = getSizeWithRatio(60);

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
			height: getSizeWithRatio(90),
			backgroundColor: statusbarColor,
			alignItems: "center",
		},
		navigationPortraitSwipe: {
			width: "100%",
			height: getSizeWithRatio(60),
			backgroundColor: navigationBarcolor,
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
			backgroundColor: navigationBarcolor,
			paddingHorizontal: getSizeWithRatio(260),
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-between",
		},
		navigationPortraitBhrTransParent: {
			position: "absolute",
			bottom: 0,
			width: "100%",
			height: getSizeWithRatio(120),
			paddingHorizontal: getSizeWithRatio(260),
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-between",
		},
		volumePortrait: {
			position: "absolute",
			borderRadius: FRAME_WIDTH,
			top: getSizeWithRatio(420),
			left: frameButtonPosition,
			width: frameButtonWidth,
			height: getSizeWithRatio(330),
			backgroundColor: frameColor,
		},
		powerPortrait: {
			position: "absolute",
			borderRadius: FRAME_WIDTH,
			top: getSizeWithRatio(900),
			left: frameButtonPosition,
			width: frameButtonWidth,
			height: getSizeWithRatio(180),
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
		cameraPortrait: {
			width: subItemSize,
			height: subItemSize,
			borderRadius: subItemSize,
			backgroundColor: frameColor,
			marginTop: getSizeWithRatio(20),
		},
		cameraFullScreenPortrait: {
			position: "absolute",
			alignSelf: "center",
			top: getSizeWithRatio(20),
			width: subItemSize,
			height: subItemSize,
			borderRadius: subItemSize,
			backgroundColor: frameColor,
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
