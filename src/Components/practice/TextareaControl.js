import { useState } from 'react';
import { TextareaControl } from '@wordpress/components';

const MyTextareaControl = () => {
    const [text, setText] = useState('');
    console.log(text)

    return (
        <TextareaControl
            __nextHasNoMarginBottom
            label="Text"
            help="Enter some text"
            value={text}
            onChange={(value) => setText(value)}
        />
    );
};

export default MyTextareaControl;