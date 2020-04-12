import React from 'react';
import { Form } from 'semantic-ui-react';
import Field from './fields/Field';
import fields from './fields';
import useApi from '../../../util/useApi';

const FormFactory = (props) => {
    const selected = props.selected;
    const api = useApi('/advertisers/form', {
        params: {
            selected: Array.from(selected)
        }
    });

    const form = api.data;

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