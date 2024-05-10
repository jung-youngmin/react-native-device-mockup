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

No dependencies. Just install it

``` bash
npm install react-native-device-mockup
```

or if you use yarn

``` bash
yarn add react-native-device-mockup
```

## How to use

## Props

### AndroidMockup & AndroidTabMockup

You can check [demo](#android)

| prop  | Required | Type | Default | Description |
| ----- | :------: |----- | ------- | ----------- |
| screenWidth | O | `number` | | Width of mockup screen<br> [details](#screenwidth) |
| noRoundedScreen | X | `boolean` | `false` | Do not use rounded corners. |
| isLandscape | X | `boolean` | `false` | portrait or landscape<br>`false` means portrait |
| containerStlye | X | `ViewStyle` | | Styles for mockup container |
| frameColor | X | `ColorValue` | `"#666666"` | Color of Frame |
| statusbarColor | X | `ColorValue` | `"#CCCCCC"` | Color of status bar |
| hideStatusBar | X | `boolean` | `false` | Hide the status bar<br>[details](#hidestatusbar) |
| navBar | X | `"swipe"`<br>`"bhr"`<br>`"rhb"` | `"swipe"` | Type of navigation bar<br>[details](#navbar) |
| navBarcolor | X | `ColorValue` | `"#CCCCCC"` | Color of navigation bar |
| transparentNavBar | X | `boolean` | `false` | Make the navigation bar transparent.<br>[details](#transparentnavbar) |
| hideNavBar | X | `boolean` | `false` | Hide the navigation bar<br>[details](#hidenavbar) |
| transparentCamArea | X | `boolean` | `false` | *NOTE: AndroidMockup only.*<br>Make the area around the camera transparent.<br>Only works when `isLandscape=true`.<br>[details](#transparentcamarea) |
| children | X | `ReactNode` |  | Components to be rendered on the mockup screen |

#### screenWidth

> for: AndroidMockup  

Width of mockup screen.  
The height is automatically calculated according to the ratio.  
**NOTE:** It does not mean the full width of the mockup being rendered.

<br>

#### hideStatusBar

Hide the status bar.

- `false`: Status bar occupies its own space with `statusbarColor`. (default)
- `true`: Status bar no longer occupies its own area, but becomes part of the screen area.

<br>

#### navBar

Type of navigation bar.

- `"swipe"`: swipe gesture navigation bar. (modern style)
- `"bhr"`: back-home-recent buttons. (classic style)
- `"rhb"`: recent-home-back. (classic style)

<br>

#### transparentNavBar

Make the navigation bar transparent.  

- `false`: Navigation bar occupies its own space with `navBarcolor`. (default)
- `true`: Navigation bar no longer occupies its own area, but becomes part of the screen area.
  - NOTE: buttons are rendered according to the type specified by `navBar` props.

<br>

#### hideNavBar

Hide the navigation bar.  

- `false`: Show the navigation bar. (default)
- `true`: Hide the navigation bar.
  - Navigation bar no longer occupies its own area,  
    but becomes part of the screen area.
  - NOTE: buttons are **NOT** rendered according to the type specified by `navBar` props.

<br>

#### transparentCamArea

*AndroidMockup only.*  
Make the area around the camera transparent.  
It only works when `isLandscape=true`.  
It is ignored when `isLandscape=false`
> **CamArea** (Camera area)  
> The part that was the status bar when in Portrait.  
> When in Landscape, in Android Native, this part is simply expressed as an empty (blank) area.

<br>

## Demo

### Android

- `AndroidMockup`
- `AndroidTabMockup`

#### `AndroidMockup` default mockups

| isLandscape=false | isLandscape=true |
| :--: | :--: |
|![and_default](https://github.com/jung-youngmin/react-native-device-mockup/assets/166787291/7551489e-54f6-4832-814c-bdd35ae012b5) | ![and_default_land](https://github.com/jung-youngmin/react-native-device-mockup/assets/166787291/49c5fa90-e2cb-4b14-a860-9ea0349a52ab) |

#### `AndroidTabMockup` default mockups

| isLandscape=false | isLandscape=true |
| :--: | :--: |
| ![and_tab](https://github.com/jung-youngmin/react-native-device-mockup/assets/166787291/3a9f8191-0b5d-4a9e-907f-1b5d5eb60274) | ![and_tab_land](https://github.com/jung-youngmin/react-native-device-mockup/assets/166787291/7f5a4f97-2736-4578-a993-d61567c674f6) |

#### hideStatusBar & hideNavBar

``` tsx
hideStatusBar={true}
hideNavBar={true}
```

| isLandscape=false | isLandscape=true |
| :--: | :--: |
| ![and_all_hide](https://github.com/jung-youngmin/react-native-device-mockup/assets/166787291/dec76fdc-7dc3-42ac-bf68-d8e8a0ddc8d2) | ![and_all_hide_land](https://github.com/jung-youngmin/react-native-device-mockup/assets/166787291/c49dfead-ae26-449a-8ab8-e79bfb92608f) |

#### other props

| noRoundedScreen | frameColor="green"<br>statusbarColor="red"<br>navBarcolor="blue" |
| :--: | :--: |
| ![and_noRoundedScreen](https://github.com/jung-youngmin/react-native-device-mockup/assets/166787291/9ded37e1-edff-43df-a10a-864e7dd4437c) | ![and_colors](https://github.com/jung-youngmin/react-native-device-mockup/assets/166787291/32de0f9d-f687-4d6d-8ab2-40f08b54fbfa) |

#### default with child

| isLandscape=false | isLandscape=true |
| :--: | :--: |
| ![and_default_child](https://github.com/jung-youngmin/react-native-device-mockup/assets/166787291/1ffaf363-c1f4-4818-a86d-145030c86ef5) | ![and_land_default_child](https://github.com/jung-youngmin/react-native-device-mockup/assets/166787291/3ebc05a9-59ce-4a30-98fe-e32f8b8c8eb5) |

#### props.hideStatusBar

| isLandscape=false | isLandscape=true |
| :--: | :--: |
| ![hidestatusbar](https://github.com/jung-youngmin/react-native-device-mockup/assets/166787291/96c368c4-838a-4c01-ba48-55279ddfdc44) | ![hidestatusbar_land](https://github.com/jung-youngmin/react-native-device-mockup/assets/166787291/bb9f836e-223e-4796-997e-aa71b2e2968d) |

#### props.transparentNavBar

| isLandscape=false | isLandscape=true |
| :--: | :--: |
| ![trans_navi](https://github.com/jung-youngmin/react-native-device-mockup/assets/166787291/0dd9a206-4e72-413a-8249-eb359d66eba3)<br>`navBar="bhr"` | ![trans_navi_land](https://github.com/jung-youngmin/react-native-device-mockup/assets/166787291/70485119-4b85-4517-9290-1242023ba19b)<br>`navBar="bhr"` |

#### props.hideNavBar

| isLandscape=false | isLandscape=true |
| :--: | :--: |
| ![hide_navi](https://github.com/jung-youngmin/react-native-device-mockup/assets/166787291/8a8330d1-ca94-494e-b55d-af797dcdcfbe) | ![hide_navi_land](https://github.com/jung-youngmin/react-native-device-mockup/assets/166787291/13612fe4-d8d2-4589-a6a0-3643ecd37a76) |

#### props.transparentCamArea

AndroidMockup, landscape only
| isLandscape=false | isLandscape=true |
| :--: | :--: |
| none | ![transparentCamArea](https://github.com/jung-youngmin/react-native-device-mockup/assets/166787291/3ed9eba5-758e-46b2-828d-5381015789d0) |

## License

MIT license
