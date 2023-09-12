import { Button, TextField, Switch, FormControlLabel } from '@mui/material';
import React, { useState } from 'react';
import styles from './FormularioCadastro.module.css'

function FormularioCadastro({ aoEnviar, validarCPF }) {

    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [cpf, setCpf] = useState("")
    const [promocoes, setPromocoes] = useState(true)
    const [novidades, setNovidades] = useState(false)
    const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } })

    return (
        <form
        className={styles.formulario}
            onSubmit={(event) => {
                event.preventDefault()
                aoEnviar({ nome, sobrenome, cpf, promocoes, novidades })
                setNome("")
                setSobrenome("")
                setCpf("")
            }}
        >

            <TextField
                id="nome"
                label="Nome"
                variant="outlined"
                margin='dense'
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
                margin='dense'
                fullWidth
                value={sobrenome}
                onChange={(event) => {
                    setSobrenome(event.target.value)
                }}
            />

            <TextField
                onChange={(event) => {
                    setCpf(event.target.value)
                }}

                onBlur={(event) => {
                    const ehValido = validarCPF(event.target.value)
                    setErros({ cpf: ehValido })
                }}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id="cpf"
                label="CPF"
                variant="outlined"
                margin='dense'
                fullWidth
                value={cpf}
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

            <Button
                variant='contained'
                color='primary'
                type='submit'
                fullWidth
                size='large'
            >Confirmar</Button>
        </form>
    )
}

export default FormularioCadastro