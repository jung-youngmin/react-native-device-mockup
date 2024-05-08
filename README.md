# react-native-device-mockup

## Index

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [How to use](#how-to-use)
4. [Props](#props)
5. [Demo](#demo)
6. [License](#license)

## Introduction

`react-native-device-mockup` provides frame mockups for Android and iOS devices.  
You can use this library when you need a device demo for your app.  
Every mockup is rendered as a pure react-native `View` component.  

`react-native-device-mockup` provides the following mockups:

1. Android
   1. Phone: 19.5:9 aspect ratio
   2. Tablet: 16:10 aspect ratio
2. iOS
   1. iPhone
      1. legacy iPhone: iPhone SE3
      2. notched iPhone: iPhone 14
      3. Dynamic island iPhone: iPhone 15 Pro
   2. iPad
      1. legacy iPad 4:3 aspect ratio (home button)
      2. modern iPad: 4.3:3 aspect ratio (no home button)

## Installation

## How to use

## Props

### AndroidMocup

| prop  | Required | Type | Default | Description |
| ----- | :------: |----- | ------- | ----------- |
| screenWidth | O | `number` | | Width of mockup screen<br> [details](#screenwidth) |
| screenRounded | X | `boolean` | `true` | Whether the screen corners are round |
| isLandscape | X | `boolean` | `false` | portrait or landscape |
| containerStlye | X | `ViewStyle` | | Styles for mockup container |
| frameColor | X | `ColorValue` | `"#666666"` | frame color for mockup |
| statusbarColor | X | `ColorValue` | `"#CCCCCC"` | statusbar color for mockup |
| navigationBar | X | `"swipe"`<br>`"bhr"`<br>`"rhb"` | `"swipe"` | Type of navigation bar |


#### screenWidth

Width of mockup screen.  
The height is automatically calculated according to the ratio.  
**NOTE:** This does not refer to the full width of the rendered mockup.
> 목업 화면의 너비  
> 높이는 비율에 맞게 자동으로 계산합니다.  
> **NOTE:** 렌더링되는 목업의 전체 너비를 의미하지 않습니다.

``` ts
interface IAndroidMockupProps {
//  readonly screenWidth: number;
 /** default: true */
//  readonly screenRounded?: boolean;
 /** default: false */
//  readonly isLandscape?: boolean;
//  readonly containerStlye?: StyleProp<ViewStyle>;
 /** default: "#666666" */
//  readonly frameColor?: ColorValue;
 /** default: "#CCCCCC" */
//  readonly statusbarColor?: ColorValue;
 /** default: "swipe" */
 readonly navigationBar?: "swipe" | "bhr" | "rhb";
 /** default: false */
 readonly hideStatusBar?: boolean;
 /** default: false */
 readonly transparentNavigationBar?: boolean;
 /** default: false */
 readonly hideNavigationBar?: boolean;
}
```

## Demo

## License

MIT license
