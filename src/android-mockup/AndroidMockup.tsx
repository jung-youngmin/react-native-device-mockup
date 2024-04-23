import React, { useEffect, useMemo, useState } from "react";
import { StyleSheet, View } from "react-native";

interface IAndroidMockupProps {}

export default function AndroidMockup(props: IAndroidMockupProps) {
	return (
		<View style={[styles.TEST, { height: 400, alignItems: "center", marginVertical: 16 }]}>
			<View
				style={[
					{
						flex: 1,
						width: 200,
						height: 400,
						paddingVertical: 0,
						backgroundColor: "#EEEEEE",
						borderRadius: 30,
						borderWidth: 4,
						borderColor: "#555555",
						marginRight: 30,
					},
				]}>
				<View style={{ flex: 1 }}>
					<View style={[{ marginTop: 30, flexDirection: "row", justifyContent: "space-between" }]}>
						<View style={{ width: 36, height: 36, backgroundColor: "#777777", borderRadius: 8 }}></View>
						<View style={{ width: 36, height: 36, backgroundColor: "#777777", borderRadius: 8 }}></View>
						<View style={{ width: 36, height: 36, backgroundColor: "#777777", borderRadius: 8 }}></View>
						<View style={{ width: 36, height: 36, backgroundColor: "#777777", borderRadius: 8 }}></View>
					</View>
					<View style={[{ marginTop: 16, flexDirection: "row", justifyContent: "space-between" }]}>
						<View style={{ width: 36, height: 36, backgroundColor: "#777777", borderRadius: 8 }}></View>
						<View style={{ width: 36, height: 36, backgroundColor: "#777777", borderRadius: 8 }}></View>
						<View style={{ width: 36, height: 36, backgroundColor: "#777777", borderRadius: 8 }}></View>
						<View style={{ width: 36, height: 36, backgroundColor: "#777777", borderRadius: 8 }}></View>
					</View>
					<View style={[{ marginTop: 16, flexDirection: "row", justifyContent: "space-between" }]}>
						<View style={{ width: 36, height: 36, backgroundColor: "#777777", borderRadius: 8 }}></View>
						<View style={{ width: 36, height: 36, backgroundColor: "#777777", borderRadius: 8 }}></View>
						<View style={{ width: 36, height: 36, backgroundColor: "#777777", borderRadius: 8 }}></View>
						<View style={{ width: 36, height: 36, backgroundColor: "transparent", borderRadius: 8 }}></View>
					</View>
				</View>
				{/* <View style={{ height: 20, flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" }}>
					<IconFA name="square" color={colors.bgDivider} allowFontScaling={false} />
					<IconFA name="circle" color={colors.bgDivider} allowFontScaling={false} />
					<IconFA name="caret-left" color={colors.bgDivider} size={18} allowFontScaling={false} />
				</View> */}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	TEST: {
		borderWidth: 1,
	},
});
