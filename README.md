# :white_check_mark: react-native-checkbox-lite
A liteweight checkbox component for react native. It works on Android, iOS and Expo web. 
No dependency installation required.

## :blue_book: Installation:

Install the component through npm using:

```
npm i react-native-checkbox-lite
```

## :microscope: Example:
```js
import React from 'react';
import { StyleSheet, View } from 'react-native';

import CheckBox from 'react-native-checkbox-lite';

export default function App() {

  const [isChecked, setIsChecked] = React.useState(true);

  function toogleCheckBox() {
    setIsChecked(!isChecked);
  }

  return (
    <View style={styles.container}>
      <CheckBox text={'CheckBox Text'} isChecked={isChecked} onPress={toogleCheckBox} checkBoxColor={'#2980b9'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

```

## :coffee: API


Props              | Type     | Optional | Default     | Description
----------------- | -------- | -------- | ----------- | -----------
style  | StyleSheet style  | true |   |   Style object of checkbox container
checkBoxSize  | int |true | 24  | Pixel size of checkbox image
checkBoxColor   |  string | true | #000 | Hex color code of checkbox image
isChecked  | bool |true | false  | Checkbox checked state
onPress | function | true |   | Callback  function when pressed
text   | string | true | Checkbox Text | Text that will be displayed along the checkbox
textStyle   |  StyleSheet style  | true  | | Style object of the text

## :wrench: Issues

Issues are welcome. Please create a new issue under the issues tab.

**MIT Licensed**