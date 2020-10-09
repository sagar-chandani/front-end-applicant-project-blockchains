
## Project

1. As the user types in the input field, a list of options will appear below it.
   - The list will only appear when input is not empty. Whitespace is considered empty.
   - The list will contain items from the `list` prop that **start** with the user entered value. Matching will be case insensitive. Every new character typed will filter the list.
2. Clicking on a list item will populate the input with the selected item's value and hide the list.
3. As the user types, the matching substring within the dipslayed options will be bold. The rest of the string will not be bold.
   1. Ex. When the user types `bl`, `bl` in `black`, `blanchedalmond`, `blue`, and `blueviolet` will be bold. The rest of each word will not be bold.
4. For visible options, style the substring the user has entered as **bold**.
5. Mousing over a list item will highlight it, at least darkening its background color. Other styling is up to you.
6. The input and list will also be navigable using the keyboard.
   - Using `tab` and `shift+tab`, the user will be able to move focus to and from the different list items.
     - With the cursor in the input, pressing the `tab` key will move focus to the first item with the default browser focus style.
     - Subsequent presses of the "tab" key will focus the next item in the list.
     - Pressing the `shift+tab` keys will focus the previous item in the list.
     - Pressing the `shift+tab` key when the first item is focused will focus
       the input again.
     - Mousing over other list items will highlight them while the keyboard-
       focused item remains focused.
     - Pressing the `tab` key when no list is visible will move focus away
       from the input.
   - Pressing the `enter` or `return` key when an item is focused will populate the input with the focused item's value, hide the list, and focus the input again.
   - Pressing the `escape` key will close the list.
7. Clicking outside the input or the list will close the list.

#### Development Instructions

1. Clone this repository and run `npm install` to install dependencies.
2. From the project directory, `npm start` runs the app in development mode.
3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

###### Attributions

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).s
