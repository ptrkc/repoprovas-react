import { Link } from "react-router-dom";
import styled from "styled-components";

export default function HomePage() {
    return (
        <Home>
            Filtrar provas por:
            <div>
                <Link to={"/professores"}>Professores</Link>
                <Link to={"/disciplinas"}>Disciplinas</Link>
            </div>
        </Home>
    );
}

const Home = styled.div`
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    div {
        margin: 10px;
        a {
            margin: 10px;
        }
    }
`;
