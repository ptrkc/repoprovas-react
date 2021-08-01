import { Link } from "react-router-dom";
import styled from "styled-components";

export default function HomePage() {
    return (
        <Home>
            <h1>Filtrar provas por:</h1>
            <div>
                <Link to={"/disciplinas"}>Disciplinas</Link>
                <Link to={"/professores"}>Professores</Link>
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
    h1 {
        margin: 10px;
        font-size: 20px;
    }
    div {
        margin: 10px;
        a {
            font-size: 24px;
            margin: 10px;
            background-color: #94c6ff;
            border-radius: 10px;
            padding: 10px;
        }
    }
`;
