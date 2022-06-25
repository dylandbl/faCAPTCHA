# faCAPTCHA
A functional, configurable CAPTCHA with features available to create an anti-UX design. faCAPTCHA is a joke component inspired by YouTuber and streamer [Kitboga](https://www.youtube.com/c/KitbogaShow), who uses fake websites to frustrate and waste the time of scammers. The component is fully-functional and can operate as a complete CAPTCHA with proper configuration. Just be sure to change the `helpText`.


## API
| Property           | Type       | Default value |Description |
| ------------------ | ---------- | ------------- |----------- |
| `captchaTopics`    | `string[]`       | See here      | Topics displayed at the top of the CAPTCHA. If not defined, a pseudorandomly selected default value will be used. | 
| `captchaTopicText` | `string[]`       | See here      | Array of topics to be displayed in the CAPTCHA header. Does not work with `headerText`. |
| `cellsWide`        | `number`         | `4`           | Number of cells in each row. |
| `cellsTall`        | `number`         | `cellsWide`   | Number of cells in each column. |
| `imgTopicUrls`     | `ImgTopicType[]` | -             | Array of image URLs with associated tags. Tags are compared to the topic selected from `captchaTopics`. The images will be displayed in order. |
| `headerText`       | `string`         | See here      | Used in place of the CAPTCHA header text. Overrides `captchaTopic`.
| `helpText`         | `string`         | See here      | Used in place of the default help text, shown when the '?' icon is clicked. |
| `minAttempts`      | `number`         | `1`           | Minimum number of required attempts, regardless of whether the attempts are correct or not. |
| `notARobotText`    | `string`         | `"I'm not a robot"` | Used in place of the "I'm not a robot" text. |
| `onClickCheckbox`  | `() => void`     | -             | Executes on clicking the checkbox, does not execute if the CAPTCHA popup is open. |
| `onClickVerify`    | `() => void`     | -             | Executes on clicking the 'Verify' button. |
| `onRefresh`        | `() => void`     | -             | Executes on clicking the refresh icon. |
| `onVerificationComplete` | `() => void` | -           | Executes when verification is successful and completed. |
| `simulateSlow`     | `0 - 3`          | `1`           | Simulates a slow internet connection speed. |
| `verifyText`       | `string`         | `"verify"`    | Text for the 'Verify' button. |
    
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
