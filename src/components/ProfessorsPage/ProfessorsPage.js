import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function ProfessorsPage() {
    const [professors, setProfessors] = useState([]);
    useEffect(() => {
        getProfessors();
    }, []);
    function getProfessors() {
        const req = axios.get(`${process.env.REACT_APP_API_URL}/professors`);
        req.then((res) => {
            setProfessors(res.data);
        });
    }

    return (
        <Container>
            <h1>Professores:</h1>
            {professors.map((p) => (
                <Link to={`/professores/${p.id}`} key={p.id}>
                    {p.name} ({p.exams})
                </Link>
            ))}
        </Container>
    );
}

const Container = styled.div`
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
