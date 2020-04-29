import React from 'react';
import { Form, Input as SemanticInput } from 'semantic-ui-react';

const Input = ({ data, ...props}) => {
    return (
        <Form.Field>
            <label>{ data.label }</label>
            <SemanticInput value={data.value} onChange={e => props.onChange(data.id, e.target.value)} placeholder={ data.placeholder ?? '' } />
        </Form.Field>
    );
};

export default Input;