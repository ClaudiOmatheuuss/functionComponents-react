import { Component } from 'react';
import './App.css';

import 'fontsource-roboto'
import CaixaForm from './components/CaixaForm/CaixaForm';
import validarCPF from './components/CaixaForm/validarCPF';

class App extends Component {

  render() {
    return (
      <CaixaForm validarCPF={validarCPF} />
    );
  }
}

export default App;