import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function DisciplinesPage() {
    const [disciplines, setDisciplines] = useState([]);
    useEffect(() => {
        getDisciplines();
    }, []);
    function getDisciplines() {
        const req = axios.get(`${process.env.REACT_APP_API_URL}/disciplines`);
        req.then((res) => {
            setDisciplines(res.data);
        });
    }

    return (
        <Container>
            {disciplines.map((d) => (
                <Link to={`/disciplines/${d.id}`} key={d.id}>
                    {d.name}
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
