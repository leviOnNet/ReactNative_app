# ReactNative_app
- React Native app consuming an API (https://api.chucknorris.io/) with Chuck Norris Jokes.

To run on your machine, ensure you do the foloowing first:
1. have node js installed.
2. have expo installed.
3. run "npm install".
4. tun "npm start".

if you face an error related to @react-navigation/native, do the following:
solution 1.
- Install react-navigation module.
- Re-build your project.
- Restart the packager by stopping the current packager and then starting the packager again with react-native start.

solution 2
- run "npm i react-navigation @react-native-community/masked-view react-native-gesture-handler react-native-reanimated react-native-safe-area-context react-native-screens"

solution 3
- Install React Navigation "npm install react-navigation"
- Install Dependencies "expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view"
- Install React Navigation Stack "npm install react-navigation-stack @react-native-community/masked-view"
- Start the app and clear cache with npm start -c
