import React, { PropsWithChildren, useMemo } from "react";
import { ColorValue, StyleSheet, View, ViewStyle } from "react-native";
import { IIosMockupVariantProps } from "../variants-interface";

export default function IPhoneIslandPortrait(props: PropsWithChildren<IIosMockupVariantProps>) {
	const {
		screenWidth,
		frameColor,
		frameOnly,
		statusbarColor,
		hideStatusBar,
		hideNavigationBar,
		transparentNavigationBar,
	} = props;
	const styles = useMemo(() => {
		return getStyles(screenWidth, frameColor, statusbarColor, frameOnly);
	}, [screenWidth, frameColor, statusbarColor, frameOnly]);

	const flex1 = useMemo<ViewStyle>(() => {
		return { flex: 1 };
	}, []);

	return (
		<View style={styles.container}>
			{/* frame */}
			<View style={styles.frame}>
				{/* screen */}
				<View style={styles.screen}>
					{hideStatusBar === false && (
						<View style={styles.notchContainer}>
							<View style={styles.island} />
						</View>
					)}
					{/* screen content */}
					<View style={flex1}>{props.children}</View>
					{hideNavigationBar === false && transparentNavigationBar === false && (
						<View style={styles.swipeContainer}>
							<View style={styles.swipeBar} />
						</View>
					)}
				</View>
				{hideStatusBar && (
					<View pointerEvents="none" style={styles.notchContainerFullScreen}>
						<View style={styles.island} />
					</View>
				)}
				{hideNavigationBar === false && transparentNavigationBar && (
					<View pointerEvents="none" style={styles.swipeContainerFullScreen}>
						<View style={styles.swipeBar} />
					</View>
				)}
			</View>
			{!frameOnly && (
				<>
					<View style={styles.silenceSwitch} />
					<View style={styles.volumeUp} />
					<View style={styles.volumeDown} />
					<View style={styles.powerPortrait} />
				</>
			)}
		</View>
	);
}

const getStyles = (
	screenWidth: number,
	frameColor: ColorValue,
	statusbarColor: ColorValue,
	frameOnly: boolean,
) => {
	const getSizeWithRatio = (size: number) => {
		const sizeRatio = Math.floor((screenWidth * size) / 390);
		return Math.max(sizeRatio, 1);
	};

	const FRAME_WIDTH = getSizeWithRatio(10);
	const HALF_FRAME_WIDTH = Math.floor(FRAME_WIDTH / 2);

	const mHeight = Math.floor((screenWidth / 9) * 19.5);
	const widthAndFrame = screenWidth + FRAME_WIDTH * 2;
	const heightAndFrame = mHeight + FRAME_WIDTH * 2;

	const bezelRadius = getSizeWithRatio(68);

	const frameButtonWidth = Math.floor(FRAME_WIDTH * 1);
	const frameButtonPosition = screenWidth + FRAME_WIDTH + HALF_FRAME_WIDTH;

	return StyleSheet.create({
		container: {
			width: widthAndFrame,
			height: heightAndFrame,
			borderRadius: bezelRadius,
			backgroundColor: frameColor,
			marginHorizontal: frameOnly ? 0 : frameButtonWidth - HALF_FRAME_WIDTH,
		},
		frame: {
			width: widthAndFrame,
			height: heightAndFrame,
			borderRadius: bezelRadius,
			borderWidth: FRAME_WIDTH,
			borderColor: frameColor,
			overflow: "hidden",
		},
		screen: {
			width: screenWidth,
			height: mHeight,
			backgroundColor: "whitesmoke",
		},
		notchContainerFullScreen: {
			position: "absolute",
			width: "100%",
			height: getSizeWithRatio(59),
			alignItems: "center",
		},
		notchContainer: {
			width: "100%",
			height: getSizeWithRatio(59),
			backgroundColor: statusbarColor,
			alignItems: "center",
		},
		island: {
			width: getSizeWithRatio(128),
			height: getSizeWithRatio(35),
			backgroundColor: frameColor,
			borderRadius: getSizeWithRatio(50),
			marginTop: getSizeWithRatio(13),
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
			borderRadius: FRAME_WIDTH,
			top: getSizeWithRatio(165),
			right: frameButtonPosition,
			width: frameButtonWidth,
			height: getSizeWithRatio(34),
			backgroundColor: frameColor,
		},
		volumeUp: {
			position: "absolute",
			borderRadius: FRAME_WIDTH,
			top: getSizeWithRatio(230),
			right: frameButtonPosition,
			width: frameButtonWidth,
			height: getSizeWithRatio(65),
			backgroundColor: frameColor,
		},
		volumeDown: {
			position: "absolute",
			borderRadius: FRAME_WIDTH,
			top: getSizeWithRatio(315),
			right: frameButtonPosition,
			width: frameButtonWidth,
			height: getSizeWithRatio(65),
			backgroundColor: frameColor,
		},
		powerPortrait: {
			position: "absolute",
			borderRadius: FRAME_WIDTH,
			top: getSizeWithRatio(280),
			left: frameButtonPosition,
			width: frameButtonWidth,
			height: getSizeWithRatio(105),
			backgroundColor: frameColor,
		},
	});
};
