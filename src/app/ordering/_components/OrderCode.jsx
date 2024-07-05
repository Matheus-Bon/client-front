'use client'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import getDataLocalStorage from '@/utils/getDateLocalStorage';

export default function OrderCode() {
    const [url, seturl] = React.useState(`/ordering/`);
    const pathname = usePathname();

    React.useEffect(() => {
        const data = getDataLocalStorage('userId');
        console.log('data ', data)
        seturl(`/ordering/${data}`);
    }, []);

    let title = 'Área de Pedido';
    let icon = null;

    if (pathname.startsWith('/ordering/')) {
        icon = (
            <Link href={`/ordering/cart`} color="inherit">
                <ShoppingCartIcon />
            </Link>
        );
    }

    if (pathname.startsWith('/ordering/cart')) {
        title = "Seu Carrinho";
        icon = (
            <Link href={url} color="inherit">
                <ArrowBackIcon />
            </Link>
        );
    }

    if (pathname.startsWith('/ordering/orderCompletion')) {
        title = "Pedido Feito!";
        icon = null;
    }

    return (
        <Box className='mb-10'>
            <AppBar position='fixed'>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {title}
                    </Typography>
                    {icon}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
