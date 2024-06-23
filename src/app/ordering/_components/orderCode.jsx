'use client'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useRouter } from 'next/navigation'

export default function NavBar({ orderCode, orderId }) {
    const router = useRouter();

    const goToCart = () => {
        const path = `/ordering/${orderId}/cart`;
        router.push(path);
    }

    return (
        <Box>
            <AppBar position='fixed'>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Pedido {orderCode}
                    </Typography>
                    <Button color="inherit" onClick={goToCart}>
                        <ShoppingCartIcon />
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}