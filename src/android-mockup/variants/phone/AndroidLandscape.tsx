import React, { PropsWithChildren, useMemo } from "react";
import { ColorValue, StyleSheet, View } from "react-native";
import { IAndroidMockupVariantProps } from "../variants-interface";

export default function AndroidLandscape(
	props: PropsWithChildren<IAndroidMockupVariantProps & { readonly transparentCamArea: boolean }>,
) {
	const {
		screenRounded,
		frameColor,
		statusbarColor,
		navigationBar,
		hideStatusBar,
		hideNavigationBar,
		transparentNavigationBar,
		transparentCamArea,
	} = props;
	const styles = useMemo(() => {
		return getStyles(props.screenWidth, screenRounded, frameColor, statusbarColor);
	}, [props.screenWidth, screenRounded, frameColor, statusbarColor]);

	return (
		<View style={styles.container}>
			{/* frame */}
			<View style={styles.frame}>
				{/* screen */}
				<View style={styles.screen}>
					{/* status bar*/}
					{transparentCamArea === false && (
						<View style={styles.statusbarLandscape}>
							{/* camera */}
							<View style={styles.cameraLandscape} />
						</View>
					)}
					{/* screen content */}
					<View style={{ flex: 1 }}>
						{hideStatusBar === false && <View style={styles.statusbar} />}
						<View style={{ flex: 1 }}>{props.children}</View>
						{/* navigation bar - swipe */}
						{hideNavigationBar === false &&
							navigationBar === "swipe" &&
							transparentNavigationBar === false && (
								<View style={styles.navigationLandscapeSwipe}>
									<View style={styles.navigationSwipeBar} />
								</View>
							)}
					</View>

					{/* camera - fullScreen */}
					{transparentCamArea && <View style={styles.cameraFullScreenLandscape} />}

					{/* navigation bar - fullScreen - swipe */}
					{hideNavigationBar === false &&
						navigationBar === "swipe" &&
						transparentNavigationBar && (
							<View
								pointerEvents="none"
								style={styles.navigationFullScreenLandscapeSwipe}>
								<View style={styles.navigationSwipeBar} />
							</View>
						)}

					{/* navigation bar - bhr */}
					{hideNavigationBar === false &&
						navigationBar === "bhr" &&
						(transparentNavigationBar ? (
							<View
								pointerEvents="none"
								style={styles.navigationLandscapeBhrTransparent}>
								<View style={styles.square} />
								<View style={styles.circle} />
								<View style={styles.triangle} />
							</View>
						) : (
							<View style={styles.navigationLandscapeBHR}>
								<View style={styles.square} />
								<View style={styles.circle} />
								<View style={styles.triangle} />
							</View>
						))}

					{/* navigation bar - rhb */}
					{hideNavigationBar === false &&
						navigationBar === "rhb" &&
						(transparentNavigationBar ? (
							<View
								pointerEvents="none"
								style={styles.navigationLandscapeBhrTransparent}>
								<View style={styles.triangle} />
								<View style={styles.circle} />
								<View style={styles.square} />
							</View>
						) : (
							<View style={styles.navigationLandscapeBHR}>
								<View style={styles.triangle} />
								<View style={styles.circle} />
								<View style={styles.square} />
							</View>
						))}
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
		const sizeRatio = Math.floor((screenWidth * size) / 2340);
		return Math.max(sizeRatio, 1);
	};

	const FRAME_WIDTH = getSizeWithRatio(32);
	const HALF_FRAME_WIDTH = Math.floor(FRAME_WIDTH / 2);

	const mHeight = Math.floor((screenWidth / 19.5) * 9);
	const widthAndFrame = screenWidth + FRAME_WIDTH * 2;
	const heightAndFrame = mHeight + FRAME_WIDTH * 2;

	const frameButtonHeight = Math.floor(FRAME_WIDTH * 0.9);
	const frameButtonPosition = mHeight + FRAME_WIDTH + HALF_FRAME_WIDTH;

	const subItemSize = getSizeWithRatio(60);

	return StyleSheet.create({
		container: {
			width: widthAndFrame,
			height: heightAndFrame,
			borderRadius: screenRounded ? getSizeWithRatio(140) : getSizeWithRatio(30),
			backgroundColor: frameColor,
			marginTop: frameButtonHeight - HALF_FRAME_WIDTH + 1,
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
			flexDirection: "row",
		},
		statusbarLandscape: {
			width: getSizeWithRatio(90),
			height: "100%",
			backgroundColor: statusbarColor,
			justifyContent: "center",
		},
		statusbar: {
			width: "100%",
			height: getSizeWithRatio(50),
			backgroundColor: statusbarColor,
		},
		navigationLandscapeSwipe: {
			width: "100%",
			height: getSizeWithRatio(50),
			backgroundColor: statusbarColor,
			alignItems: "center",
			justifyContent: "center",
		},
		navigationFullScreenLandscapeSwipe: {
			position: "absolute",
			bottom: 0,
			width: "100%",
			height: getSizeWithRatio(50),
			alignItems: "center",
			justifyContent: "center",
		},
		navigationSwipeBar: {
			backgroundColor: frameColor,
			borderRadius: getSizeWithRatio(100),
			width: getSizeWithRatio(350),
			height: getSizeWithRatio(15),
		},
		navigationLandscapeBHR: {
			width: getSizeWithRatio(120),
			height: "100%",
			paddingVertical: getSizeWithRatio(260),
			backgroundColor: statusbarColor,
			alignItems: "center",
			justifyContent: "space-between",
		},
		navigationLandscapeBhrTransparent: {
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
			borderRadius: FRAME_WIDTH,
			left: getSizeWithRatio(420),
			bottom: frameButtonPosition,
			width: getSizeWithRatio(330),
			height: frameButtonHeight,
			backgroundColor: frameColor,
		},
		powerLandscape: {
			position: "absolute",
			borderRadius: FRAME_WIDTH,
			left: getSizeWithRatio(900),
			bottom: frameButtonPosition,
			width: getSizeWithRatio(180),
			height: frameButtonHeight,
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
		cameraLandscape: {
			width: subItemSize,
			height: subItemSize,
			borderRadius: subItemSize,
			backgroundColor: frameColor,
			marginLeft: getSizeWithRatio(20),
		},
		cameraFullScreenLandscape: {
			position: "absolute",
			alignSelf: "center",
			verticalAlign: "middle",
			left: getSizeWithRatio(20),
			width: subItemSize,
			height: subItemSize,
			borderRadius: subItemSize,
			backgroundColor: frameColor,
		},
	});
};
