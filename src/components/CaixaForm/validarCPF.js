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
    
    function caracteresEspeciais(cpf) {
      const caracteresEspeciais = ["!", "@", "#", "$", "%", "¨", "&", "*", "(", ")", "-", "_", ",", ".", "=", "+", "`", "[", "{", "]", "}", "<", ">", ":", ";", "/", "?", "|", "'", '"']
  
      let tamanhoCpf = cpf.length
  
      for (let i = 0; i < tamanhoCpf; i++) {
        if (caracteresEspeciais.includes(cpf[i])) {
          return true
        }
      }
  
      return false
    }
    
    if( cpf.length !== 11 ) {
      return {valido:false, texto:"CPF deve ter 11 digitos."}
    } else if ( caracteresIguais(cpf) === true ) {
      return {valido:false, texto:"CPF não pode ter todos os números repetidos."}
    } else if ( caracteresEspeciais(cpf) ) {
      return {valido: false, texto:"Ops! nada de caracteres especiais aqui. Apenas números."}
    } else {
      return {valido: true, texto:""}
    }
  
}