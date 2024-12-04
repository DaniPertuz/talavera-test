This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

## Step 1: Set up application

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Decisions made

### Atomic design pattern

It was implemented to group each app section giving the opportunity to:

- Have reusable components to allow us to maintain a consistent design throughout the application
- Scale the design as it grows.
- Reduce redundancy by developing smaller components.
- Improve communication between design and development teams by using well-defined components.

### Context API

Native React feature to share data across components without passing props manually at every level. We achieve improved app performance by minimizing unnecessary re-renders by updating only the components that consume the context and allow us to reduce external dependencies implementation.

### AsyncStorage

External library to store stocks list provided in device's memory to guarantee offline performance.

## Implemented tier of requirements

- Sorting list by name ascending, descending, or setting original list order.
- Filtering list by name and daily change stock properties.
- Displaying details of each stock list item through a native modal.

Suggested timeframe was respected to develop this app. The app is presented without testing due to multiple errors encountered during configuration, and addressing these errors would not have allowed me to meet the assigned timeframe for submission.

I really appretiate this opportunity you gave me to develop this application, and I hope you take into account the design patterns I implemented to give the best possible MVP.

I would like to continue in this process in order to work with you guys. I am already crossing fingers to hear good news from you soon.

Cheers!
