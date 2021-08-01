import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
    const history = useHistory();
    return (
        <Container>
            <div onClick={history.goBack}>Voltar</div>
            <Link to={"/"}>
                <div>Home</div>
            </Link>
            <Link to={"/enviar"}>
                <div>Enviar</div>
            </Link>
        </Container>
    );
}

const Container = styled.div`
    background-image: linear-gradient(#292929, #4e4e4e);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    div {
        cursor: pointer;
        margin: 10px 20px;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    div:hover {
        filter: brightness(0.6);
    }
`;
