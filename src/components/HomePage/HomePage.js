import { Link } from "react-router-dom";
import styled from "styled-components";

export default function HomePage() {
    return (
        <Home>
            <h1>RepoProvas</h1>
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
        font-size: 40px;
        margin-bottom: 20px;
        font-weight: bold;
        color: #202020;
    }
    div {
        margin: 10px;
        a {
            background-image: linear-gradient(#4e4e4e, #292929);
            color: white;
            padding: 10px 40px;
            font-size: 24px;
            margin: 10px;
            background-color: #94c6ff;
            border-radius: 10px;
            transition: 0.2s;
        }
        a:hover {
            filter: brightness(0.6);
        }
    }
`;
