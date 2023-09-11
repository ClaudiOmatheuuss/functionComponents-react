import { Component } from 'react';
import './App.css';

import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro'
import { Typography } from '@mui/material';
import 'fontsource-roboto'
import CaixaForm from './components/CaixaForm/CaixaForm';

class App extends Component {

  render() {
    return (
      <CaixaForm>
        <Typography variant='h3' component='h1' align='center'>Formulário de cadastro</Typography>
        <FormularioCadastro aoEnviar={aoEnviarForm} validarCPF={validarCPF} />
      </CaixaForm>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados)
}

function validarCPF(cpf) {

  if( cpf.length != 11 ) {
    return {valido:false, texto:"CPF deve ter 11 digitos."}
  } else {
    return {valido: true, texto:""}
  }

}

export default App;