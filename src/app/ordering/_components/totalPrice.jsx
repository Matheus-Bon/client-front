import * as React from 'react';
import Box from '@mui/material/Box';
import CheckIcon from '@mui/icons-material/Check';
import IconButton from '@mui/material/IconButton';



export default function TotalPrice({ totalPrice }) {
    return (
        <Box className='flex flex-row justify-between bg-blue-400 p-5'>
            <p className='text-center text-lg'>
                Total R$ {totalPrice}
            </p>
            <IconButton color="primary" aria-label="add to shopping cart">
                <CheckIcon />
            </IconButton>
        </Box>
    );
}