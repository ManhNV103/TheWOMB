import React, { useContext } from 'react';
import { ApiContext } from '../../../../context/ApiContext';

const Field = ({ as: Component, data, ...props }) => {
    const { data: form, setData } = useContext(ApiContext);

    const onChange = (id, value) => {
        const index = form.fields.findIndex(field => field.id === id);

        form.fields[index].value = value;

        setData({ ...form });
    }

    return (
        <Component onChange={onChange} data={data} />
    );
};

export default Field;