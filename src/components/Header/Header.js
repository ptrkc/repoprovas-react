import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
    const history = useHistory();
    return (
        <Container>
            <button onClick={history.goBack}>Voltar</button>
            <Link to={"/"}>Home</Link>
            <Link to={"/enviar"}>Enviar</Link>
        </Container>
    );
}

const Container = styled.div`
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
        margin: 10px;
        a {
            margin: 10px;
        }
    }
`;
