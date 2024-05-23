import React, { PropsWithChildren, useMemo } from "react";
import { ColorValue, StyleSheet, View, ViewStyle } from "react-native";
import { IIosMockupVariantProps } from "../variants-interface";

export default function IPadModernLandscape(props: PropsWithChildren<IIosMockupVariantProps>) {
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
					{hideStatusBar === false && <View style={styles.notchContainer} />}
					{/* screen content */}
					<View style={flex1}>{props.children}</View>
					{hideNavigationBar === false && transparentNavigationBar === false && (
						<View style={styles.swipeContainer}>
							<View style={styles.swipeBar} />
						</View>
					)}
				</View>
				{hideStatusBar && (
					<View pointerEvents="none" style={styles.notchContainerFullScreen} />
				)}
				{hideNavigationBar === false && transparentNavigationBar && (
					<View pointerEvents="none" style={styles.swipeContainerFullScreen}>
						<View style={styles.swipeBar} />
					</View>
				)}
			</View>
			{!frameOnly && (
				<>
					<View style={styles.volumeUp} />
					<View style={styles.volumeDown} />
					<View style={styles.power} />
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
		const sizeRatio = Math.floor((screenWidth * size) / 1194);
		return Math.max(sizeRatio, 1);
	};

	const FRAME_WIDTH = getSizeWithRatio(35);
	const HALF_FRAME_WIDTH = Math.floor(FRAME_WIDTH / 2);

	const mHeight = Math.floor((screenWidth / 4) * 3);
	const widthAndFrame = screenWidth + FRAME_WIDTH * 2;
	const heightAndFrame = mHeight + FRAME_WIDTH * 2;

	const bezelRadius = getSizeWithRatio(50);

	const frameButtonHeight = Math.floor(FRAME_WIDTH * 0.65);
	const frameButtonPosition = mHeight + FRAME_WIDTH + HALF_FRAME_WIDTH;

	return StyleSheet.create({
		container: {
			width: widthAndFrame,
			height: heightAndFrame,
			borderRadius: bezelRadius,
			backgroundColor: frameColor,
			marginTop: frameOnly ? 0 : frameButtonHeight - HALF_FRAME_WIDTH,
			marginLeft: frameOnly ? 0 : frameButtonHeight - HALF_FRAME_WIDTH,
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
			height: getSizeWithRatio(24),
			alignItems: "center",
		},
		notchContainer: {
			width: "100%",
			height: getSizeWithRatio(24),
			backgroundColor: statusbarColor,
			alignItems: "center",
		},
		swipeContainerFullScreen: {
			position: "absolute",
			bottom: 0,
			width: "100%",
			height: getSizeWithRatio(20),
			paddingTop: getSizeWithRatio(4),
			alignItems: "center",
			justifyContent: "center",
		},
		swipeContainer: {
			width: "100%",
			height: getSizeWithRatio(20),
			backgroundColor: statusbarColor,
			paddingTop: getSizeWithRatio(4),
			alignItems: "center",
			justifyContent: "center",
		},
		swipeBar: {
			backgroundColor: frameColor,
			borderRadius: getSizeWithRatio(100),
			width: "25%",
			height: getSizeWithRatio(8),
		},
		volumeUp: {
			position: "absolute",
			borderRadius: FRAME_WIDTH,
			left: getSizeWithRatio(75),
			bottom: frameButtonPosition,
			width: getSizeWithRatio(50),
			height: frameButtonHeight,
			backgroundColor: frameColor,
		},
		volumeDown: {
			position: "absolute",
			borderRadius: FRAME_WIDTH,
			left: getSizeWithRatio(130),
			bottom: frameButtonPosition,
			width: getSizeWithRatio(50),
			height: frameButtonHeight,
			backgroundColor: frameColor,
		},
		power: {
			position: "absolute",
			borderRadius: FRAME_WIDTH,
			right: screenWidth + FRAME_WIDTH + HALF_FRAME_WIDTH,
			bottom: mHeight - FRAME_WIDTH - HALF_FRAME_WIDTH,
			width: frameButtonHeight,
			height: getSizeWithRatio(60),
			backgroundColor: frameColor,
		},
	});
};
