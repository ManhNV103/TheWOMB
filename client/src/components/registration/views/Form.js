import React from 'react';
import { useHistory } from 'react-router-dom';
import { Header, Segment, Button } from 'semantic-ui-react';
import Layout from '../layout/Layout';
import FormFactory from '../form/FormFactory';

const Form = (props) => {
    const history = useHistory();

    if(!props.location.state) {
        history.push('/');
        return null;
    }

    const selected = props.location.state.selected;

    return (
        <Layout>
            <div className="ui container">
                <Header></Header>
                <FormFactory selected={selected} />
                <Segment basic vertical textAlign="right">
                    <Button primary>Submit</Button>
                </Segment>
            </div>
        </Layout>
    );
};

export default Form;