import React from 'react';
import { Form } from 'semantic-ui-react';
import Field from './fields/Field';
import fields from './fields';

const FormFactory = (props) => {
    const form = props.api.data;

    if(!form) {
        return <div></div>;
    }

    const formDom = form.fields.map((field) => {
        return (
            <Field as={fields[field.field]} data={field} />
        );
    });

    return (
        <Form>
            { formDom }
        </Form>
    );
};

export default FormFactory;