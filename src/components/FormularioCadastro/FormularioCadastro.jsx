import { Button, TextField, Switch, FormControlLabel } from '@mui/material';
import React from 'react';

function FormularioCadastro() {
    return (
        <form>
            <TextField 
                id="nome" 
                label="Nome" 
                variant="outlined" 
                margin='normal' 
                fullWidth 
            />

            <TextField 
                id="sobrenome" 
                label="Sobrenome" 
                variant="outlined"
                margin='normal' 
                fullWidth 
            />

            <TextField 
                id="cpf" 
                label="CPF" 
                variant="outlined" 
                margin='normal' 
                fullWidth 
            />

            <FormControlLabel 
                label="Promoções" 
                control={<Switch name='promocoes' defaultChecked color='primary' />}    
            />

            <FormControlLabel 
                label="Novidades" 
                control={<Switch name='novidades' defaultChecked color='primary' />} 
            />

            <Button variant='contained' color='primary' type='submit'>Confirmar</Button>
        </form>
    )
}

export default FormularioCadastro