import React from 'react';
import { useHistory } from 'react-router-dom';
import { Header } from 'semantic-ui-react';
import Layout from '../layout/Layout';
import FormFactory from '../form/FormFactory';
import ApiProvider from '../../../context/ApiContext';

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
                <ApiProvider
                    endpoint="/advertisers/form"
                    options={{ query: { selected: Array.from(selected) }}}
                >
                    <FormFactory selected={selected} />
                </ApiProvider>
            </div>
        </Layout>
    );
};

export default Form;