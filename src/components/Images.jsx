import React from 'react';
import { Grid } from '@mui/material';
import Image from './Image';

const Images = ({ data = [] }) => {
    console.log("Images component received data:", data); // Debugging

    return (
        <Grid container spacing={2}>
            {data?.map((image, index) => (
                <Grid item xs={3} key={index}>
                    <Image image={image} />
                </Grid>
            ))}
        </Grid>
    );
}
export default Images;
