import { Container } from "@mui/material";

function Caixa ({ children }) {
        return(
            <Container component="article" maxWidth="sm" > {children}  </Container>
        )
}

export default Caixa