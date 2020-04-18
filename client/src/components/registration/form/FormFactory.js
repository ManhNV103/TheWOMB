import React, { useContext } from 'react';
import { Form } from 'semantic-ui-react';
import Field from './fields/Field';
import fields from './fields';
import { ApiContext } from '../../../context/ApiContext';

const FormFactory = (props) => {
    const { data: form } = useContext(ApiContext);

    if(!form) {
        return <div></div>;
    }

    const formDom = form.fields.map((field, key) => {
        return (
            <Field key={key} as={fields[field.component]} data={field} />
        );
    });

    return (
        <Form>
            { formDom }
        </Form>
    );
};

export default FormFactory;