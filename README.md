# WIP: react-native-device-mockup

**Work In Progress**  
**NOT COMPLETED**

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

### AndroidMockup

| prop  | Required | Type | Default | Description |
| ----- | :------: |----- | ------- | ----------- |
| screenWidth | O | `number` | | Width of mockup screen<br> [details](#screenwidth) |
| noRoundedScreen | X | `boolean` | `false` | Do not use rounded corners.<br>[demo](#androidmockup---phone) |
| isLandscape | X | `boolean` | `false` | portrait or landscape<br>`false` means portrait |
| containerStlye | X | `ViewStyle` | | Styles for mockup container |
| frameColor | X | `ColorValue` | `"#666666"` | Color of Frame<br>[demo](#androidmockup---phone) |
| statusbarColor | X | `ColorValue` | `"#CCCCCC"` | Color of status bar<br>[demo](#androidmockup---phone) |
| hideStatusBar | X | `boolean` | `false` | Hide the status bar<br>[demo](#androidmockup---phone) |
| navigationBar | X | `"swipe"`<br>`"bhr"`<br>`"rhb"` | `"swipe"` | Type of navigation bar<br>[details](#navigationbar) |
| navigationBarcolor | X | `ColorValue` | `"#CCCCCC"` | Color of navigation bar<br>[demo](#androidmockup---phone) |
| transparentNavigationBar | X | `boolean` | `false` | // TODO<br>[demo](#androidmockup---phone) |
| hideNavigationBar | X | `boolean` | `false` | // TODO<br>[demo](#androidmockup---phone) |
| transparentCamArea | X | `boolean` | `false` | Landscape only // TODO<br>[demo](#androidmockup---phone) |

#### screenWidth

Width of mockup screen.  
The height is automatically calculated according to the ratio.  
**NOTE:** It does not mean the full width of the mockup being rendered.

#### navigationBar

Type of navigation bar.

- `"swipe"`: swipe gesture navigation bar. (modern style)
- `"bhr"`: back-home-recent buttons. (classic style)
- `"rhb"`: recent-home-back. (classic style)

## Demo

### AndroidMockup - Phone

| default | noRoundedScreen | colors |
| :--: | :--: | :--: |
|![and_default](https://github.com/jung-youngmin/react-native-device-mockup/assets/166787291/7551489e-54f6-4832-814c-bdd35ae012b5)| ![and_noRoundedScreen](https://github.com/jung-youngmin/react-native-device-mockup/assets/166787291/9ded37e1-edff-43df-a10a-864e7dd4437c) | ![and_colors](https://github.com/jung-youngmin/react-native-device-mockup/assets/166787291/32de0f9d-f687-4d6d-8ab2-40f08b54fbfa) |
||| frameColor="green"<br>statusbarColor="red"<br>navigationBarcolor="blue" |

| default with child | hideStatusBar |
| :--: | :--: |
| ![and_default_child](https://github.com/jung-youngmin/react-native-device-mockup/assets/166787291/1ffaf363-c1f4-4818-a86d-145030c86ef5) | ![hidestatusbar (사용자 지정)](https://github.com/jung-youngmin/react-native-device-mockup/assets/166787291/96c368c4-838a-4c01-ba48-55279ddfdc44) |
| ![and_land_default_child](https://github.com/jung-youngmin/react-native-device-mockup/assets/166787291/3ebc05a9-59ce-4a30-98fe-e32f8b8c8eb5) | ![hidestatusbar_land](https://github.com/jung-youngmin/react-native-device-mockup/assets/166787291/bb9f836e-223e-4796-997e-aa71b2e2968d) |

| transparentNavigationBar<br>navigationBar="bhr" | hideNavigationBar |
| :--: | :--: |
| ![trans_navi](https://github.com/jung-youngmin/react-native-device-mockup/assets/166787291/0dd9a206-4e72-413a-8249-eb359d66eba3) | ![hide_navi](https://github.com/jung-youngmin/react-native-device-mockup/assets/166787291/8a8330d1-ca94-494e-b55d-af797dcdcfbe) |
| ![trans_navi_land](https://github.com/jung-youngmin/react-native-device-mockup/assets/166787291/70485119-4b85-4517-9290-1242023ba19b) | ![hide_navi_land](https://github.com/jung-youngmin/react-native-device-mockup/assets/166787291/13612fe4-d8d2-4589-a6a0-3643ecd37a76) |

| transparentCamArea |
| :--: |
| ![transparentCamArea](https://github.com/jung-youngmin/react-native-device-mockup/assets/166787291/3ed9eba5-758e-46b2-828d-5381015789d0) |
| landscape only |

## License

MIT license
