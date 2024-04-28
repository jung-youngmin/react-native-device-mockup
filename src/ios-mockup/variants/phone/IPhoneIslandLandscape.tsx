import React, { PropsWithChildren, useMemo } from "react";
import { ColorValue, StyleSheet, View } from "react-native";
import { IIosMockupVariantProps } from "../variants-interface";

export default function IPhoneIslandLandscape(props: PropsWithChildren<IIosMockupVariantProps>) {
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
							<View style={styles.island}></View>
						</View>
					)}
					{/* screen content */}
					<View style={{ flex: 1 }}>
						<View style={{ flex: 1 }}>{props.children}</View>
						{hideNavigationBar === false && transparentNavigationBar === false && (
							<View style={styles.swipeContainer}>
								<View style={styles.swipeBar} />
							</View>
						)}
					</View>
					{hideStatusBar === false && <View style={styles.safeAreaRight} />}
				</View>
				{hideStatusBar && (
					<View pointerEvents="none" style={styles.notchContainerFullScreen}>
						<View style={styles.island}></View>
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
		const sizeRatio = Math.floor((screenWidth * size) / 844);
		return Math.max(sizeRatio, 1);
	};

	const FRAME_WIDTH = getSizeWithRatio(10);
	const HALF_FRAME_WIDTH = Math.floor(FRAME_WIDTH / 2);

	const mHeight = Math.round((screenWidth / 19.5) * 9);

	return StyleSheet.create({
		frame: {
			width: screenWidth + FRAME_WIDTH * 2,
			height: mHeight + FRAME_WIDTH * 2,
			borderRadius: getSizeWithRatio(68),
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
		safeAreaRight: {
			width: getSizeWithRatio(59),
			height: "100%",
			backgroundColor: statusbarColor,
		},
		notchContainerFullScreen: {
			position: "absolute",
			width: getSizeWithRatio(59),
			height: "100%",
			justifyContent: "center",
		},
		notchContainer: {
			width: getSizeWithRatio(59),
			height: "100%",
			backgroundColor: statusbarColor,
			justifyContent: "center",
		},
		island: {
			width: getSizeWithRatio(35),
			height: getSizeWithRatio(128),
			backgroundColor: frameColor,
			borderRadius: getSizeWithRatio(50),
			marginLeft: getSizeWithRatio(13),
		},
		swipeContainerFullScreen: {
			position: "absolute",
			bottom: 0,
			width: "100%",
			height: getSizeWithRatio(21),
			alignItems: "center",
			justifyContent: "flex-end",
		},
		swipeContainer: {
			width: "100%",
			height: getSizeWithRatio(21),
			backgroundColor: statusbarColor,
			alignItems: "center",
			justifyContent: "flex-end",
		},
		swipeBar: {
			backgroundColor: frameColor,
			borderRadius: getSizeWithRatio(100),
			width: "30%",
			height: getSizeWithRatio(7),
			marginBottom: getSizeWithRatio(5),
		},
		silenceSwitch: {
			position: "absolute",
			borderRadius: getSizeWithRatio(HALF_FRAME_WIDTH) + HALF_FRAME_WIDTH,
			left: getSizeWithRatio(165),
			top: mHeight + FRAME_WIDTH + HALF_FRAME_WIDTH,
			width: getSizeWithRatio(34),
			height: getSizeWithRatio(FRAME_WIDTH) + HALF_FRAME_WIDTH,
			backgroundColor: frameColor,
		},
		volumeUp: {
			position: "absolute",
			borderRadius: getSizeWithRatio(HALF_FRAME_WIDTH) + HALF_FRAME_WIDTH,
			left: getSizeWithRatio(230),
			top: mHeight + FRAME_WIDTH + HALF_FRAME_WIDTH,
			width: getSizeWithRatio(65),
			height: getSizeWithRatio(FRAME_WIDTH) + HALF_FRAME_WIDTH,
			backgroundColor: frameColor,
		},
		volumeDown: {
			position: "absolute",
			borderRadius: getSizeWithRatio(HALF_FRAME_WIDTH) + HALF_FRAME_WIDTH,
			left: getSizeWithRatio(315),
			top: mHeight + FRAME_WIDTH + HALF_FRAME_WIDTH,
			width: getSizeWithRatio(65),
			height: getSizeWithRatio(FRAME_WIDTH) + HALF_FRAME_WIDTH,
			backgroundColor: frameColor,
		},
		powerPortrait: {
			position: "absolute",
			borderRadius: getSizeWithRatio(HALF_FRAME_WIDTH) + HALF_FRAME_WIDTH,
			left: getSizeWithRatio(280),
			bottom: mHeight + FRAME_WIDTH + HALF_FRAME_WIDTH,
			width: getSizeWithRatio(105),
			height: getSizeWithRatio(FRAME_WIDTH) + HALF_FRAME_WIDTH,
			backgroundColor: frameColor,
		},
	});
};
