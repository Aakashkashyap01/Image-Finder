import { InputBase, Box, styled } from '@mui/material';
import React from 'react';

const Component = styled(Box)({
    background: "#f6f6f6",
    "& > div": {
        margin: 10
    }
});
const BreadCumb = ({setText, setCount}) => {
    return (
        <Component>
            <InputBase
            placeholder='search-images' onChange={(e) => setText(e.target.value)}>
            </InputBase>
            <InputBase placeholder='Number Of Images' type='number' onChange={(e) => setCount(e.target.value)}>
            </InputBase>
        </Component>
    );
}

export default BreadCumb;
