## Overview

TODO:

1) Describe what this app is (i.e a more advanced react native application).
2) Add description of technologies used (Redux/React Native Navigation).
3) Add list of capabilities of this app.
4) Add animated gif demoing app.
5) Get this example working for Android.

## Design Principles

This example app was designed based on the following ideas:

1) Organize app by feature (usually corresponds to a screen)
2) Enforce strict module boundaries
3) To avoid cyclic (circular) dependencies. See https://stackoverflow.com/questions/29807664/cyclic-dependency-returns-empty-object-in-react-native

A new feature request likely constitute a new folder in the “features” directory. i.e a camera screen, etc.

## What Is A Feature?

A feature is a discrete user-facing experience with a clear business case and design. A feature usually will correspond with a screen. These are organized under the “features” directory. This example includes the following:

1) Counter: A screen that displays a button and a counter. Tapping the button increments the counter.
2) Entry-screen: Displays the screen the user first sees when entering the app. i.e this could be a user on boarding screen. Allow the suer to navigate
to a tabbed version of the app or to deep link with a back button to the counter screen.
3) Color-screen: This screen displays 3 random colored views that get changed when the user taps the change colors button.

## Module Boundaries

A good way to explain the principle of module boundaries is to look at some examples of bad module boundaries. Some example of bad module boundaries:

1) Lets say features/color-screen/ has a sub component called colors section colorSection.js. Let's say we decide to create a new feature called features/color-pallete and it decides to use  colorSection.js. An example of poor module boundaries would be not refactoring the colorSection so that it lives in the top level microcomponents directory and just importing it from the neighboring feature.

2) Another example of poor module boundaries would be not explicitly defining the expected PropTypes for this sub component, i.e maybe it requires and array of colors and a function to work.

If any actions/styles/components are used outside of a feature directory, you should probably have them move up to the top level and be imported down.

### Structure Of A Feature

As is convention in most react/redux applications, a given feature will consist of containers, components, actions, and reducers. We can also expose selectors for querying the state of a feature (see https://github.com/reactjs/reselect makes it easier to query state in map state to props).

If you are not familiar with redux (or even if you are) you should check out this tutorial series on redux:

https://egghead.io/courses/getting-started-with-redux

In our example application, we also define the routes that will be used in navigation.

### Containers And Components

1) This sample uses the “smart containers, dumb components” pattern: https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0
2) This sample enforces an additional rule specific to this app: each scene must be an individual container with a corresponding route for the navigator.
This allows us to leverage the native navigator for scene transitions and thus manages the backstack. With React JS on web, it is common to use a single container which conditionally displays different containers. This is fine for web as it can create a URI to identify each scene for the backstack. This is not the case for native apps and is particularly a concern with Android due to hardware back button.
With regards to directory structure, A scene can be a single file, or it can be grouped into a directory of files if:

The scenes are contingent. An example might be a user phone confirmation flow: after a user enters their phone number, they are either shown a screen that confirms an SMS was sent, or they are shown a screen that indicates that there is already an account associated with that number.

The scenes are part of a bidirectional flow. For example, when a user uploads a photo, they can decide they want to retake it and return to the capture screen, and this bidirectional navigation may occur several times.

If a scene has multiple components in multiple files, they may be grouped in a directory below their scene. If there is a single scene and a single component they will be sibling files. Any given directory should contain a minimum of two files. Otherwise, the functionality of that directory should be in a single descriptively-named file.

### Routes

All routes should be defined in the shared/routes.js file. Any given route should correspond to a string defined in navigation/pages. Naviagtion/pages nearly exports a dictionary notarizing all routes (screens) present in the app that the user might navigate to.

### Actions And Reducers

If the feature makes changes to the redux store, it does so via actions and reducers. Actions are defined in actions.js and send data to the store. Reducers specify how the application store changes in response. Action types are defined in actionTypes.js and are referenced by both the actions and reducers. This example follows a pattern of fat actions with thin reducers. Actions perform most of the calculations whereas reducers simply update the application state. I.e all network requests should go in actions and not be sprinkled around the components/containers.

### Selectors

These live in the selectors top-level directory and are in a single file. These are used for querying the state of a module and can be accessed anywhere.

### TOP-LEVEL “SHARED” DIRECTORY

The items in this directory may be shared across the application and do not constitute a single user-facing feature. The sub-modules are as follows:

1) App: Responsible for initializing the application, sending the user to the appropriate landing page.
2) Microcomponents: UI widgets that are used throughout the app and are not specific to a particular feature. (Does not exist in this example)
3) Profile: The user’s profile and actions and reducers for querying and updating the user’s information.
4) Analytics: Functions for tracking analytic events
5) Const: Constants used throughout the app including URL endpoints and navigator styling
6) Routes: The route exports corresponding to any containers in the shared directory.
7) Themes: Should include a file for any stylistic elements like colors or fonts which are used through out the app. i.e should be a color.js file in that directory. Same for fonts etc. (Does not exist in this example)

### Why Is shared/app/initial-screen Not a Feature

The initial-screen is the entry point into the app that sets up all of the listeners for deeplinking/background/foregrounding etc. It's the first page you should route to regardless of whether you are building a single screen or tabbed applications. It's only function is to display the loading spinner while the store gets rehydrated (i.e any persisted state gets loaded into redux) and we decide which screen to route the user to. i.e, should we display a permissions pre ask screen? Is the user logged in and or do we care? Should we display the users profile, should we deep link to a listing, etc.

### Microcomponents

TODO: Add section explaining Microcomponents, i.e are they dumb or not.

### NAVIGATION

This app uses react-native-navigation by Wix, which provides a native navigation experience: https://wix.github.io/react-native-navigation/#/ .

### MADGE

Use madge to check for circular dependencies: https://github.com/pahen/madge ideally this should be incorporated into CI.
