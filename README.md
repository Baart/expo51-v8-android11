# expo51-v8-android11

When upgrading from expo sdk 50 to expo sdk 51, 
Crash at startup for device with Android <= 11 (works fine on IOS / Android > 11)  

`Android Bundled 252ms index.js (572 modules)

 WARN  No native ExponentConstants module found, are you sure the expo-constants's module is linked properly?
 
 ERROR  Error: Cannot find native module 'ExpoAsset', js engine: v8
 ERROR  Invariant Violation: "main" has not been registered. This can happen if:
* Metro (the local dev server) is run from the wrong folder. Check if Metro is running, stop it and restart it in the current project.
* A module failed to load due to an error and `AppRegistry.registerComponent` wasn't called., js engine: v8`

To reproduce : 

Clone 
npm install 
npm run android

<img width="661" alt="Image" src="https://github.com/user-attachments/assets/c867e7b1-8d95-4611-9ae5-56e714692d17" />


This sample has been created with thoses steps : 

npx create-expo-app -t bare-minimum@51
Follow v8 install https://github.com/Kudo/react-native-v8
npm run android

