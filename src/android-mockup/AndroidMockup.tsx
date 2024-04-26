import React, { PropsWithChildren, useMemo } from "react";
import { ColorValue, StyleProp, StyleSheet, View, ViewStyle } from "react-native";

interface IAndroidMockupProps {
	readonly orientaion: "portrait" | "landscape";
	readonly screenWidth: number;
	readonly screenRounded?: boolean;
	readonly containerStlye?: StyleProp<ViewStyle>;
	/** default: "true" */
	/** default: "#666666" */
	readonly frameColor?: ColorValue;
	/** default: "#CCCCCC" */
	readonly statusbarColor?: ColorValue;
	/** default: "swipe" */
	readonly navigationBar?: "swipe" | "bhr" | "rhb";
}

export default function AndroidMockup(props: PropsWithChildren<IAndroidMockupProps>) {
	const screenRounded = useMemo(() => {
		return props.screenRounded === undefined ? true : props.screenRounded;
	}, [props.screenRounded]);

	const frameColor = useMemo(() => {
		return props.frameColor === undefined ? "#666666" : props.frameColor;
	}, [props.frameColor]);

	const statusbarColor = useMemo(() => {
		return props.statusbarColor === undefined ? "#CCCCCC" : props.statusbarColor;
	}, [props.statusbarColor]);

	const navigationBar = useMemo(() => {
		return props.navigationBar === undefined ? "swipe" : props.navigationBar;
	}, [props.navigationBar]);

	const styles = useMemo(() => {
		return getStyles(
			props.orientaion,
			props.screenWidth,
			screenRounded,
			frameColor,
			statusbarColor,
		);
	}, [props.orientaion, props.screenWidth, screenRounded, frameColor, statusbarColor]);

	return (
		<View style={props.containerStlye}>
			<View>
				{/* frame */}
				<View style={styles.frame}>
					{/* screen */}
					<View style={styles.screen}>
						{/* status bar - portrait */}
						{props.orientaion === "portrait" && (
							<View style={styles.statusbarPortrait}>
								{/* camera - portrait */}
								<View style={styles.cameraPortrait} />
							</View>
						)}
						{/* status bar - landscape */}
						{props.orientaion === "landscape" && (
							<View style={styles.statusbarLandscape}>
								{/* camera - landscape */}
								<View style={styles.cameraLandscape} />
							</View>
						)}
						{/* screen content */}
						<View style={{ flex: 1 }}>
							<View style={{ flex: 1 }}>{props.children}</View>
							{/* navigation bar - landscape - swipe */}
							{props.orientaion === "landscape" && navigationBar === "swipe" && (
								<View style={styles.navigationLandscapeSwipe}>
									<View style={styles.navigationSwipeBar} />
								</View>
							)}
						</View>
						{/* navigation bar - portrait - swipe */}
						{props.orientaion === "portrait" && navigationBar === "swipe" && (
							<View style={styles.navigationPortraitSwipe}>
								<View style={styles.navigationSwipeBar} />
							</View>
						)}
						{/* navigation bar - portrait - bhr */}
						{props.orientaion === "portrait" && navigationBar === "bhr" && (
							<View style={styles.navigationPortraitBHR}>
								<View style={styles.triangle} />
								<View style={styles.circle} />
								<View style={styles.square} />
							</View>
						)}

						{/* navigation bar - landscape - bhr */}
						{props.orientaion === "landscape" && navigationBar === "bhr" && (
							<View style={styles.navigationLandscapeBHR}>
								<View style={styles.square} />
								<View style={styles.circle} />
								<View style={styles.triangle} />
							</View>
						)}

						{/* navigation bar - portrait - rhb */}
						{props.orientaion === "portrait" && navigationBar === "rhb" && (
							<View style={styles.navigationPortraitBHR}>
								<View style={styles.square} />
								<View style={styles.circle} />
								<View style={styles.triangle} />
							</View>
						)}

						{/* navigation bar - landscape - rhb */}
						{props.orientaion === "landscape" && navigationBar === "rhb" && (
							<View style={styles.navigationLandscapeBHR}>
								<View style={styles.triangle} />
								<View style={styles.circle} />
								<View style={styles.square} />
							</View>
						)}
					</View>
				</View>
				{props.orientaion === "portrait" && (
					<>
						<View style={styles.volumePortrait} />
						<View style={styles.powerPortrait} />
					</>
				)}
				{props.orientaion === "landscape" && (
					<>
						<View style={styles.volumeLandscape} />
						<View style={styles.powerLandscape} />
					</>
				)}
			</View>
		</View>
	);
}

const getStyles = (
	orientaion: "portrait" | "landscape",
	screenWidth: number,
	screenRounded: boolean,
	frameColor: ColorValue,
	statusbarColor: ColorValue,
) => {
	const getSizeWithRatio = (size: number) => {
		return orientaion === "portrait"
			? Math.round((screenWidth * size) / 1080)
			: Math.round((screenWidth * size) / 2340);
	};

	const FRAME_WIDTH = getSizeWithRatio(20);
	const mHeight =
		orientaion === "portrait"
			? Math.round((screenWidth / 9) * 19.5)
			: Math.round((screenWidth / 19.5) * 9);

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
			flexDirection: orientaion === "portrait" ? "column" : "row",
		},
		statusbarPortrait: {
			width: "100%",
			height: getSizeWithRatio(90),
			backgroundColor: statusbarColor,
			alignItems: "center",
		},
		statusbarLandscape: {
			width: getSizeWithRatio(90),
			height: "100%",
			backgroundColor: statusbarColor,
			justifyContent: "center",
		},
		navigationPortraitSwipe: {
			width: "100%",
			height: getSizeWithRatio(60),
			backgroundColor: statusbarColor,
			alignItems: "center",
			justifyContent: "center",
		},
		navigationLandscapeSwipe: {
			width: "100%",
			height: getSizeWithRatio(50),
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
		navigationLandscapeBHR: {
			width: getSizeWithRatio(120),
			height: "100%",
			paddingVertical: getSizeWithRatio(260),
			backgroundColor: statusbarColor,
			alignItems: "center",
			justifyContent: "space-between",
		},
		volumePortrait: {
			position: "absolute",
			borderRadius: getSizeWithRatio(FRAME_WIDTH / 2 + 15),
			top: getSizeWithRatio(420),
			left: screenWidth + FRAME_WIDTH + Math.round(FRAME_WIDTH / 2),
			width: getSizeWithRatio(FRAME_WIDTH / 2 + 15),
			height: getSizeWithRatio(330),
			backgroundColor: frameColor,
		},
		powerPortrait: {
			position: "absolute",
			borderRadius: getSizeWithRatio(FRAME_WIDTH / 2 + 15),
			top: getSizeWithRatio(900),
			left: screenWidth + FRAME_WIDTH + Math.round(FRAME_WIDTH / 2),
			width: getSizeWithRatio(FRAME_WIDTH / 2 + 15),
			height: getSizeWithRatio(180),
			backgroundColor: frameColor,
		},
		volumeLandscape: {
			position: "absolute",
			borderRadius: getSizeWithRatio(FRAME_WIDTH / 2 + 15),
			left: getSizeWithRatio(420),
			bottom: mHeight + FRAME_WIDTH + Math.round(FRAME_WIDTH / 2),
			width: getSizeWithRatio(330),
			height: getSizeWithRatio(FRAME_WIDTH / 2 + 15),
			backgroundColor: frameColor,
		},
		powerLandscape: {
			position: "absolute",
			borderRadius: getSizeWithRatio(FRAME_WIDTH / 2 + 15),
			left: getSizeWithRatio(900),
			bottom: mHeight + FRAME_WIDTH + Math.round(FRAME_WIDTH / 2),
			width: getSizeWithRatio(180),
			height: getSizeWithRatio(FRAME_WIDTH / 2 + 15),
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
			opacity: 0.6,
			marginTop: getSizeWithRatio(20),
		},
		cameraLandscape: {
			width: getSizeWithRatio(55),
			height: getSizeWithRatio(55),
			borderRadius: getSizeWithRatio(55),
			backgroundColor: frameColor,
			opacity: 0.6,
			marginLeft: getSizeWithRatio(20),
		},
	});
};
