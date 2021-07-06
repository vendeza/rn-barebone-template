#Prepare for app distribution

You can edit your project settings anytime, but some settings are necessary during development. Others are recommended when you distribute your app for testing, and required when you upload your app and later, submit it to App Review.

Before you upload your app to App Store Connect, provide all the required information about your app. For example, set app icons to pass App Store Connect validation tests. Update the build string, verify your build settings, and for macOS apps, set the copyright key.

Even when you choose to distribute your app outside of the App Store, prepare your app for distribution before you create the archive and export the app.

Step 1: Set the bundle ID
The bundle ID uniquely identifies your app throughout the system. After you upload your first build, you can’t change the bundle ID in App Store Connect, so carefully pick and set the bundle ID for all the targets in the app bundle before uploading.

Step 2: Assign the target to a team
If you haven’t already done so, assign the target to a team. For example, if you want to distribute your app using TestFlight or through the App Store, assign the target to a team that belongs to the Apple Developer Program.

Step 3: Set the version number and build string
Set the version number and build string before you distribute your app because App Store Connect uses these to match the build with the app version. The version number and build string are used throughout the system to identify your app.

Step 4: Set the app category
Categories help users discover your app on the App Store. You set the primary and secondary categories, under which your app is listed on the App Store, in App Store Connect. For macOS apps, set the app category under which your app will be listed on the Mac App Store. The category you select should match the category you later select in App Store Connect.

Step 5: Edit deployment info settings
Edit deployment info settings before you distribute your app because some of these settings must match values you enter in App Store Connect. Also, the deployment settings determine which operating system versions and for iOS apps, which devices your app supports.

Note: If you modified the build setting while developing your app, then verify the build settings before you distribute an app through the App Store.

Step 6: Add app icons
Add an app icon to represent your app in various locations on a device and to pass App Store Connect validation tests. If you want to release your app through the App Store, also add an App Store icon. For icon metrics, go to Human Interface Guidelines.

Step 7: Provide a Launch Screen (iOS)
You specify the launch screen or launch image, in the “App Icons and Launch Images” section of the General pane in the project editor.

For iOS apps, edit the existing launch screen that is in the project when you create it from a template, or add a launch screen file. The launch screen can simply display an image. For iPad apps, you are required to use a user interface file for the launch screen to support multiple aspect ratios and multi-tasking modes. For iPhone apps, it’s also recommended to use a launch screen. If your project uses a launch image, consider replacing it with a launch screen.

For other apps, add launch images to the default LaunchImage asset set or create a new asset catalog and set for your launch image.

Note: For the specification of assets that you upload later using App Store Connect, go to App preview specifications and Screenshot specifications in App Store Connect Help.

Step 8: Provide usage descriptions to access protected resources
You must provide usage descriptions in the information property list for all protected resources your app accesses, such as the user's location, calendar, reminders, and contacts. Also provide usage descriptions for accessories, such as the camera and microphone. To learn more, go to Accessing Protected Resources.

Step 9: Add export compliance information (optional)
If necessary, add export compliance information for each build that you upload to App Store Connect.
