import { ColorValue } from "react-native";

export interface IIosMockupVariantProps {
	readonly screenWidth: number;
	/** default: "#666666" */
	readonly frameColor: ColorValue;
	/** default: "#CCCCCC" */
	readonly statusbarColor: ColorValue;
	/** default: false */
	readonly hideStatusBar: boolean;
	/** default: false */
	readonly transparentNavigationBar: boolean;
	/** default: false */
	readonly hideNavigationBar: boolean;
}
