'use client'

import { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DialogSelect({ textButton, dialogTitle, options = [], onChange, optionSelected }) {
    const [open, setOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(optionSelected);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleConfirm = () => {
        onChange(selectedOption);
        handleClose();
    };

    return (
        <div>
            <Button onClick={handleClickOpen}>{textButton}</Button>
            <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogTitle>{dialogTitle}</DialogTitle>
                <DialogContent>
                    <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        <FormControl fullWidth>
                            <InputLabel id="select-label" className='my-3'>Selecione</InputLabel>
                            <Select
                                labelId="select-label"
                                value={selectedOption}
                                onChange={handleSelectChange}
                            >
                                {options.map(option => (
                                    <MenuItem key={option.value} value={option}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={handleConfirm} color="primary">
                        Confirmar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}