'use client'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link';

export default function OrderCode({  }) {
    return (
        <Box className='mb-10'>
            <AppBar position='fixed'>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Área de Pedido
                    </Typography>
                    <Link href={`/ordering/cart`} color="inherit">
                        <ShoppingCartIcon />
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
}