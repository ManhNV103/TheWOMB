import React, { useContext } from 'react';
import { Form, Segment, Button } from 'semantic-ui-react';
import Field from './fields/Field';
import fields from './fields';
import { post } from '../../../services/ApiService';
import { ApiContext } from '../../../context/ApiContext';

const FormFactory = ({ selected }) => {
    const { data: form } = useContext(ApiContext);

    if(!form) {
        return null;
    }


    const formDom = form.fields.map((field, key) => {
        return (
            <Field key={key} as={fields[field.component]} data={field} /> 
        );
    });

    const onSubmit = () => {
        post('/advertisers/form', {
            form: form
        }, {
            query: {
                selected: Array.from(selected)
            }
        });
    }

    return (
        <Form onSubmit={onSubmit}>
            { formDom }
            <Segment basic vertical textAlign="right">
                <Button primary>Submit</Button>
            </Segment>
        </Form>
    );
};

export default FormFactory;