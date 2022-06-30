# faCAPTCHA
[**fey**-**kap**-ch*uh*] 

A functional, configurable, frontend CAPTCHA with features available to create an anti-UX design. The name is a portmanteau of 'fake' and 'CAPTCHA', but through development it became a real and functional CAPTCHA (with proper configuration). Just be sure to change the `helpText`. faCAPTCHA was inspired by YouTuber, streamer, and scambaiter [Kitboga](https://www.youtube.com/c/KitbogaShow), who uses fake websites or programs to frustrate and waste the time of scammers.


## API
'⚠️' denotes required props.

| ⚠️ | Property           | Type         | Default value | Description |
| --- | ------------------ | ------------ | ------------ | ----------- |
|     | `captchaTopics`    | `string[]`   | [See here](https://github.com/dylandbl/faCAPTCHA/blob/main/src/lib/utils/stringsToFind.ts) | Topics displayed at the top of the CAPTCHA. If not defined, a pseudorandomly selected default value will be used. | 
|     | `captchaTopicText` | `string[]`   | -            | Array of topics to be displayed in the CAPTCHA header. Does not work with `headerText`. |
|     | `cellsWide`        | `number`     | `4`          | Number of cells in each row. |
|     | `cellsTall`        | `number`     | `cellsWide`  | Number of cells in each column. |
| ⚠️ | [`imgTopicUrls`](#imgtopicurls)     | [`ImgTopicType[]`](#imgtopictype) | - | Array of image URLs with associated topic tags. |
|     | `headerText`       | `string`     | [See here](#headertext-default-value) | Used in place of the CAPTCHA header text. Overrides `captchaTopic`.
|     | `helpText`         | `string`     | [See here](#helptext-default-value) | Used in place of the default help text, shown when the '?' icon is clicked. |
|     | `minAttempts`      | `number`     | `1`          | Minimum number of required attempts, regardless of whether the attempts are correct or not. |
|     | `notARobotText`    | `string`     | `"I'm not a robot"` | Used in place of the "I'm not a robot" text. |
|     | `onClickCheckbox`  | `() => void` | -            | Called on clicking the checkbox. Does not execute if the CAPTCHA popup is open. |
|     | `onClickVerify`    | `() => void` | -            | Called on clicking the 'Verify' button. |
|     | `onRefresh`        | `() => void` | -            | Called on clicking the refresh icon. |
| ⚠️ | `onVerificationComplete` | `() => void` | -      | Called on successful verification completion. |
|     | [`simulateSlow`](#simulateslow)     | `0 - 3`      | `1`          | Simulates a slow internet connection speed. |
|     | `verifyText`       | `string`     | `"verify"`   | Text for the 'Verify' button. |

### `imgTopicUrls`
Topic tags are case-sensitive and compared to the topic selected from `captchaTopics`. The images will be displayed in order. If there are fewer images than cells, the images will repeat. 

#### `ImgTopicType`
```TS
type ImgTopicType = {
  url: string;
  topics: string[];
}
```

#### Exmaple
```TS
const ExampleImages: ImgTopicType[] = [
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Canthigaster_valentini_1.jpg",
    topics: ["pufferfish", "fish", "Canthigaster valentini"]
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/1/11/Joseph_Grimaldi.jpg",
    topics: ["clown"]
  }
]
```

### `headerText` default value

> Select all squares with <br>
> `${captchaTopic}` <br>
> If there are none, click `${verifyText}` <br>

### `helpText` default value
> Click on the images that correspond with the given prompt. Once you've selected all applicable images, click '`${verifyText}`'. If you make multiple wrong attempts in a row, you will be barred from accessing the site. The number of wrong attempts permitted depends on your browsing behaviour. If you complete an entire row, column, or diagonal, you have a bingo. Shout 'bingo' into your microphone to access the site.

### `simulateSlow`
Simulates a slow connection speed. A value of `0` will not create artificial load times. A value of `1` or greater will render load screens between CAPTCHA attempts and on clicking the component's refresh icon. The load time is randomly generated based on the value given, with higher values generating higher average load times.
