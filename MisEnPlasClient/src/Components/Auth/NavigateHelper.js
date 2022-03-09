import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

const NavigationHelper = (props) => {

    let navigate = useNavigate();
    useEffect(() => {
        if(props.path)
         navigate(props.path)
         
    }, [props.path]);
    return <div></div>;
}
 
export default NavigationHelper;