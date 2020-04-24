import React from 'react';
import { Form, Input as SemanticInput } from 'semantic-ui-react';

const Input = ({ value, data, ...props}) => {
    const onChange = (e) => {
        props.onChange(e.target.value);
    };

    return (
        <Form.Field>
            <label>{ data.name }</label>
            <SemanticInput value={value} onChange={onChange} placeholder={ data.placeholder ?? '' } />
        </Form.Field>
    );
};

export default Input;