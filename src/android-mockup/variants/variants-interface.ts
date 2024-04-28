import { ColorValue } from "react-native";

export interface IAndroidMockupVariantProps {
	readonly screenWidth: number;
	/** default: true */
	readonly screenRounded: boolean;
	/** default: "#666666" */
	readonly frameColor: ColorValue;
	/** default: "#CCCCCC" */
	readonly statusbarColor: ColorValue;
	/** default: "swipe" */
	readonly navigationBar: "swipe" | "bhr" | "rhb";
	/** default: false */
	readonly hideStatusBar: boolean;
	/** default: false */
	readonly transparentNavigationBar: boolean;
	/** default: false */
	readonly hideNavigationBar: boolean;
}
