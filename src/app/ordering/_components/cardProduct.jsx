import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function CardProduct() {
    return (
        <Card variant="outlined" sx={{ maxWidth: 360 }}>
            <CardMedia
                component="img"
                height="140"
                image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.rewe-static.de%2F6729673%2F5904320_digital-image.png&f=1&nofb=1&ipt=52a84337d1afa66e56b783f3e9601f05325e67dc9e5b782d94818eeba9348b75&ipo=images"
                alt="Toothbrush"
            />
            <Box sx={{ p: 2 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography gutterBottom variant="h5" component="div">
                        Coca Cola
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        R$ 12,00
                    </Typography>
                </Stack>
                <Typography color="text.secondary" variant="body2">
                    Bebida boa (ou não)
                </Typography>
            </Box>
            <Divider />
            <Box className='p-2 flex flex-row justify-between'>
                <Box sx={{ mt: 2 }}>
                    <TextField
                        label="Quantity"
                        type="number"
                        size="small"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{ min: 0 }}
                        defaultValue={0}
                        sx={{ width: '100px' }}
                    />
                </Box>
                <Box sx={{ mt: 2 }}>
                    <IconButton color="primary" aria-label="add to shopping cart">
                        <AddShoppingCartIcon />
                    </IconButton>
                </Box>
            </Box>
        </Card>
    );
}