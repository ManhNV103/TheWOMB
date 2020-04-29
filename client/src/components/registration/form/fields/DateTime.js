import React from 'react';
import { Form } from 'semantic-ui-react';
import { DateTimeInput } from 'semantic-ui-calendar-react';

const DateTime = ({data, ...props}) => {
    return (
        <Form.Field>
            <label>{ data.label }</label>
            <DateTimeInput
                value={data.value}
                iconPosition="left"
                onChange={(e, { value }) => props.onChange(data.id, value)}
                animation="fade"
                clearable
            />
        </Form.Field>
    );
};

export default DateTime;