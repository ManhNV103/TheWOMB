import React from 'react';
import { Form } from 'semantic-ui-react';
import Field from './fields/Field';
import fields from './fields';
import useApi from '../../../util/useApi';

const FormFactory = (props) => {
    const api = useApi('/advertisers/form', {
        query: {
            selected: Array.from(props.selected)
        }
    });

    const form = api.data;

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