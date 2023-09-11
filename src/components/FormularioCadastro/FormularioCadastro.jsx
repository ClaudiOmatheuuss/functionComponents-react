import { Button, TextField, Switch, FormControlLabel } from '@mui/material';
import React, { useState } from 'react';

function FormularioCadastro() {

    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [cpf, setCpf] = useState("")
    const [promocoes, setPromocoes] = useState(true)
    const [novidades, setNovidades] = useState(false)

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault()
                console.log({ 
                    nome: nome, 
                    sobrenome: sobrenome, 
                    cpf: cpf, promocoes: 
                    promocoes, 
                    novidades: novidades 
                })
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
                    setNome(event.target.value)
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
                onChange={(event) => {
                    setCpf(event.target.value)
                }}
            />

            <FormControlLabel
                label="Promoções"
                control={<Switch 
                            name='promocoes' 
                            checked={promocoes}
                            color='primary' 
                            onChange={(event) => {
                                setPromocoes(event.target.checked)
                            }}
                        />}
            />

            <FormControlLabel
                label="Novidades"
                control={<Switch 
                            name='novidades' 
                            checked={novidades}
                            color='primary' 
                            onChange={(event) => {
                                setNovidades(event.target.checked)
                            }}
                        />}
            />

            <Button variant='contained' color='primary' type='submit'>Confirmar</Button>
        </form>
    )
}

export default FormularioCadastro