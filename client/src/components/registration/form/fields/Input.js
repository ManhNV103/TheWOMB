import React from 'react';
import { Form, Input as SemanticInput } from 'semantic-ui-react';

const Input = (props) => {
    return (
        <Form.Field>
            <label>{ props.data.name }</label>
            <SemanticInput placeholder={ props.data.placeholder ?? '' } />
        </Form.Field>
    );
};

export default Input;