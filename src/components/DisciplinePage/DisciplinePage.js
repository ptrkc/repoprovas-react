import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

export default function DisciplinePage() {
    const [exams, setExams] = useState([]);
    const [discipline, setDiscipline] = useState("");
    const { id } = useParams();
    useEffect(() => {
        getExams();
        // eslint-disable-next-line
    }, []);
    function getExams() {
        const req = axios.get(
            `${process.env.REACT_APP_API_URL}/disciplines/${id}/exams`
        );
        req.then((res) => {
            setExams(res.data.exams);
            setDiscipline(res.data.discipline);
            console.log(res.data);
        });
    }

    return (
        <Container>
            <h1>{discipline}</h1>
            {exams.map((e) => (
                <Link to={e.url} key={e.id}>
                    {e.year}.{e.semester} - {e.professor.name}
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
