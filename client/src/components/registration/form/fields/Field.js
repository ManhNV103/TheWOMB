import React from 'react';

const Field = ({ as, data, ...props }) => {
    const Component = as;

    const onChange = (value) => {
        props.onChange(value); 
    }

    return (
        <Component onChange={onChange} data={data} />
    );
};

export default Field;