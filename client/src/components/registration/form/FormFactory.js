import React, { useContext } from 'react';
import { Form } from 'semantic-ui-react';
import Field from './fields/Field';
import fields from './fields';
import { ApiContext } from '../../../context/ApiContext';

const FormFactory = () => {
    const { data: form } = useContext(ApiContext);

    if(!form) {
        return null;
    }

    const formDom = form.fields.map((field, key) => {
        const onChange = (value) => {
            console.log(value);
        };
        debugger
        return (
            <Field key={key} as={fields[field.component]} data={field} onChange={onChange} />
        );
    });

    return (
        <Form>
            { formDom }
        </Form>
    );
};

export default FormFactory;