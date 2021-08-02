import { Link } from "react-router-dom";
import styled from "styled-components";

export default function HomePage() {
    return (
        <Home>
            <Title>
                RepoPro<span>v</span>as
            </Title>
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
    div {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        a {
            background-image: linear-gradient(#4e4e4e, #292929);
            color: white;
            padding: 10px 40px;
            font-size: 24px;
            margin: 10px;
            width: 200px;
            border-radius: 10px;
            transition: 0.2s;
        }
        a:hover {
            filter: brightness(0.6);
        }
    }
`;

const Title = styled.span`
    margin: 10px;
    font-size: 44px;
    margin-bottom: 20px;
    font-weight: bold;
    color: #444444;
    font-style: italic;
    span {
        color: #2aa9a3;
    }
`;
