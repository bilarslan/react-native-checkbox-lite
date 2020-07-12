import * as React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';

const CHECKBOX_MARKED = require('./static/checkbox-marked.png');
const CHECKBOX_BLANK_OUTLINE = require('./static/checkbox-blank-outline.png');

const CheckBox = ({ style, checkBoxSize = 24, checkBoxColor = '#000', isChecked = false, onPress, text = 'Checkbox Text', textStyle }) => {
    return (
        <TouchableOpacity style={[{ flexDirection: 'row', alignItems: 'center' }, style]} onPress={onPress}>
            <Image style={{ width: checkBoxSize, height: checkBoxSize, tintColor: checkBoxColor }} source={isChecked ? CHECKBOX_MARKED : CHECKBOX_BLANK_OUTLINE} />
            <Text style={textStyle}>{text}</Text>
        </TouchableOpacity>
    );
}

export { CheckBox };
