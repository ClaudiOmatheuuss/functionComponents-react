export default function validarCPF(cpf) {
    
    function caracteresIguais (cpf) {
      const primeiroElemento = cpf[0]
  
      for (let i = 1; i < cpf.length; i++) {
        if (cpf[i] !== primeiroElemento) {
          return false 
        }
      }
      return true
    }
    
    if( cpf.length !== 11 ) {
      return {valido:false, texto:"CPF deve ter 11 digitos."}
    } else if ( caracteresIguais(cpf) === true ) {
      return {valido:false, texto:"CPF não pode ter todos os números repetidos."}
    } else {
      return {valido: true, texto:""}
    }
  
}