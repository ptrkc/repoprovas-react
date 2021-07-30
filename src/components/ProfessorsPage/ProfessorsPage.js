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
            {professors.map((prof) => (
                <Link to={`/professores/${prof.id}`} key={prof.id}>
                    {prof.name}
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
