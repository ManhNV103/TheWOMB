import React from 'react';

const Field = (props) => {
    const Component = props.as;
    return (
        <Component data={props.data} />
    );
};

export default Field;