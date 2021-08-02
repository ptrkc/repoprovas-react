import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
    return (
        <Container>
            <Link to={"/"}>🏠Home</Link>
            <Link to={"/enviar"}>💾Enviar</Link>
        </Container>
    );
}

const Container = styled.div`
    background-image: linear-gradient(#292929, #4e4e4e);
    display: flex;
    justify-content: center;
    align-items: center;
    a {
        width: 200px;
        height: 30px;
        font-size: 20px;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.2s;
    }
    a:hover {
        background-color: rgba(0, 0, 0, 0.3);
        filter: brightness(0.8);
    }
`;
