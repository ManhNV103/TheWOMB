import React from 'react';
import { Header, Segment, Button } from 'semantic-ui-react';
import useApi from '../../../util/useApi';
import Layout from '../layout/Layout';
import ApiContainer from '../blocks/ApiContainer';
import FormFactory from '../form/FormFactory';

const Form = () => {
    const api = useApi('/advertisers/form');

    return (
        <Layout>
            <div className="ui container">
                <Header></Header>
                <ApiContainer api={api}>
                    <FormFactory api={api} />
                </ApiContainer>
                <Segment basic vertical textAlign="right">
                    <Button primary>Submit</Button>
                </Segment>
            </div>
        </Layout>
    );
};

export default Form;