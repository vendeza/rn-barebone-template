#How to build Android APK files
Before uploading the release build to the Play Store, make sure you test it thoroughly.
First uninstall any previous version of the app you already have installed.

- `cd android` in the root project folder
- `/.gradlew build` to build APK or `./gradlew bundleRelease` to build an AAB

APK files in: `android/app/build/outputs/apk/release` <br/>
AAB files in: `android/app/build/outputs/bundle/release`
<br/><br/>

Install it on the device using the following command in the project root:
```npx react-native run-android --variant=release```


