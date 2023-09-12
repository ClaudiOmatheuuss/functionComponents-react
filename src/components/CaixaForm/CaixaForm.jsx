import { Container, Typography } from "@mui/material";
import FormularioCadastro from "../FormularioCadastro/FormularioCadastro";

import styles from './CaixaForm.module.css'

function CaixaForm ({ validarCPF }) {
        function aoEnviarForm(dados) {
            console.log(dados)
        }
        return(
            <Container className={styles.container} component="div" maxWidth="sm">
                <Typography variant='h3' component='h1' align='center'>Formulário de cadastro</Typography>
                <FormularioCadastro aoEnviar={aoEnviarForm} validarCPF={validarCPF} />
            </Container>
        )
}



export default CaixaForm