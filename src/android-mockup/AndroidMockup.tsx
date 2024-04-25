import React, { PropsWithChildren, useCallback, useEffect, useMemo, useState } from "react";
import { ColorValue, StyleProp, StyleSheet, View, ViewStyle } from "react-native";

interface IAndroidMockupProps {
	readonly screenWidth: number;
	// TODO:
	readonly orientaion: "portrait" | "landscape";
	readonly containerStlye?: StyleProp<ViewStyle>;
	/** default: "#666666" */
	readonly frameColor?: ColorValue;
	/** default: "#CCCCCC" */
	readonly statusbarColor?: ColorValue;
}

export default function AndroidMockup(props: PropsWithChildren<IAndroidMockupProps>) {
	// 갤24 19.5:9 비율 2340 × 1080
	// 갤24울트라 19.5:9 비율 3120 × 1440
	// 1080 : 180 = 100 : x
	// 1080*x = 180 * 100
	// x = 180*100/1080

	const mHeight = useMemo(() => {
		return props.orientaion === "portrait" ? Math.round((props.screenWidth / 9) * 19.5) : Math.round((props.screenWidth / 19.5) * 9);
	}, [props.screenWidth, props.orientaion]);

	const frameColor = useMemo(() => {
		return props.frameColor === undefined ? "#666666" : props.frameColor;
	}, [props.frameColor]);

	const statusbarColor = useMemo(() => {
		return props.statusbarColor === undefined ? "#CCCCCC" : props.statusbarColor;
	}, [props.statusbarColor]);

	const getSizeWithRatio = useCallback(
		(size: number) => {
			return props.orientaion === "portrait" ? Math.round((props.screenWidth * size) / 1080) : Math.round((props.screenWidth * size) / 2340);
		},
		[props.screenWidth, props.orientaion],
	);

	const FRAME_WIDTH = useMemo(() => {
		return getSizeWithRatio(20);
	}, [props.screenWidth]);

	return (
		<View style={[{ alignItems: "center" }, props.containerStlye]}>
			<View
				style={
					{
						/* borderWidth: 1, borderColor: "red" */
					}
				}>
				<View
					style={[
						{
							width: props.screenWidth + FRAME_WIDTH * 2,
							height: mHeight + FRAME_WIDTH * 2,
							borderRadius: getSizeWithRatio(140),
							borderWidth: FRAME_WIDTH,
							borderColor: frameColor,
							overflow: "hidden",
						},
					]}>
					<View
						style={[
							{
								width: props.screenWidth,
								height: mHeight,
								backgroundColor: statusbarColor,
							},
							props.orientaion === "landscape" && { flexDirection: "row" },
						]}>
						{props.orientaion === "portrait" && (
							<View style={{ width: "100%", height: getSizeWithRatio(90), backgroundColor: statusbarColor }}></View>
						)}
						{props.orientaion === "landscape" && (
							<View style={{ width: getSizeWithRatio(95), height: "100%", backgroundColor: statusbarColor }}></View>
						)}
						<View style={{ flex: 1 }}>{props.children}</View>
						{props.orientaion === "portrait" && (
							<View style={{ width: "100%", height: getSizeWithRatio(120), backgroundColor: statusbarColor }}></View>
						)}
						{props.orientaion === "landscape" && (
							<View style={{ width: getSizeWithRatio(120), height: "100%", backgroundColor: statusbarColor }}></View>
						)}
					</View>
					{props.orientaion === "portrait" && (
						<View
							style={{
								position: "absolute",
								alignSelf: "center",
								top: getSizeWithRatio(24),
								backgroundColor: frameColor,
								borderRadius: getSizeWithRatio(60),
								width: getSizeWithRatio(60),
								height: getSizeWithRatio(60),
							}}
						/>
					)}
					{props.orientaion === "landscape" && (
						<View style={{ position: "absolute", top: 0, left: 0, height: "100%", alignItems: "center", justifyContent: "center" }}>
							<View
								style={{
									position: "absolute",
									alignSelf: "center",
									left: getSizeWithRatio(24),
									backgroundColor: frameColor,
									borderRadius: getSizeWithRatio(60),
									width: getSizeWithRatio(60),
									height: getSizeWithRatio(60),
								}}
							/>
						</View>
					)}
				</View>
				{props.orientaion === "portrait" && (
					<>
						<View
							style={{
								position: "absolute",
								borderRadius: getSizeWithRatio(FRAME_WIDTH / 2 + 15),
								top: getSizeWithRatio(420),
								left: props.screenWidth + FRAME_WIDTH + Math.round(FRAME_WIDTH / 2),
								width: getSizeWithRatio(FRAME_WIDTH / 2 + 15),
								height: getSizeWithRatio(330),
								backgroundColor: frameColor,
							}}></View>
						<View
							style={{
								position: "absolute",
								borderRadius: getSizeWithRatio(FRAME_WIDTH / 2 + 15),
								top: getSizeWithRatio(900),
								left: props.screenWidth + FRAME_WIDTH + Math.round(FRAME_WIDTH / 2),
								width: getSizeWithRatio(FRAME_WIDTH / 2 + 15),
								height: getSizeWithRatio(180),
								backgroundColor: frameColor,
							}}></View>
					</>
				)}
				{props.orientaion === "landscape" && (
					<>
						<View
							style={{
								position: "absolute",
								borderRadius: getSizeWithRatio(FRAME_WIDTH / 2 + 15),
								left: getSizeWithRatio(420),
								// bottom: 0,
								bottom: mHeight + FRAME_WIDTH + Math.round(FRAME_WIDTH / 2),
								width: getSizeWithRatio(330),
								height: getSizeWithRatio(FRAME_WIDTH / 2 + 15),
								backgroundColor: frameColor,
							}}></View>
						<View
							style={{
								position: "absolute",
								borderRadius: getSizeWithRatio(FRAME_WIDTH / 2 + 15),
								left: getSizeWithRatio(900),
								bottom: mHeight + FRAME_WIDTH + Math.round(FRAME_WIDTH / 2),
								width: getSizeWithRatio(180),
								height: getSizeWithRatio(FRAME_WIDTH / 2 + 15),
								backgroundColor: frameColor,
							}}></View>
					</>
				)}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	TEST: {
		borderWidth: 1,
	},
});
