import { Button, TextField, Switch, FormControlLabel } from '@mui/material';
import React, { useState } from 'react';

function FormularioCadastro() {

    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [cpf, setCpf] = useState("")

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault()
                console.log({ nome: nome, sobrenome: sobrenome, cpf: cpf })
                setNome("")
            }}
        >

            <TextField
                id="nome"
                label="Nome"
                variant="outlined"
                margin='normal'
                fullWidth
                value={nome}
                onChange={(event) => {
                    let tmpnome = event.target.value
                    if (tmpnome.length >= 3) {
                        setNome(tmpnome.substr(0, 3))
                    }
                    setNome(tmpnome)
                }}
            />

            <TextField
                id="sobrenome"
                label="Sobrenome"
                variant="outlined"
                margin='normal'
                fullWidth
                value={sobrenome}
                onChange={(event) => {
                    setSobrenome(event.target.value)
                }}
            />

            <TextField
                id="cpf"
                label="CPF"
                variant="outlined"
                margin='normal'
                fullWidth
                value={cpf}
                onChange={(event) => setCpf(event.target.value)}
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