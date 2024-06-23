import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function CardProduct({ image, title, description, price }) {
    return (
        <Card variant="outlined" sx={{ maxWidth: 360 }}>
            <CardMedia
                component="img"
                height="140"
                image={image}
                alt={title}
            />
            <Box sx={{ p: 2 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        R$ {price}
                    </Typography>
                </Stack>
                <Typography color="text.secondary" variant="body2">
                    {description}
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