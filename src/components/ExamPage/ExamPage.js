import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

export default function ProfessorsPage() {
    const [exam, setExam] = useState([]);
    const [error, setError] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        getExam();
        // eslint-disable-next-line
    }, []);

    function getExam() {
        axios
            .get(`${process.env.REACT_APP_API_URL}/exams/${id}`)
            .then((res) => {
                setExam(res.data);
            })
            .catch((e) => {
                setError(true);
            });
    }

    return (
        <Container>
            {exam.length ? (
                <>
                    <h1>
                        {exam[0].year}.{exam[0].semester} -{" "}
                        {exam[0].discipline.name} - {exam[0].professor.name} (
                        <a
                            href={exam[0].url}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Download
                        </a>
                        )
                    </h1>
                    <object data={exam[0].url} type="application/pdf">
                        Falha ao carregar PDF. Tente fazer o download no botão
                        acima.
                    </object>
                </>
            ) : (
                <h1>
                    {error ? <>Prova não encontrada</> : <>Carregando...</>}
                </h1>
            )}
        </Container>
    );
}

const Container = styled.div`
    height: 100vh;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    object {
        text-align: center;
        width: 100%;
        height: 100%;
        margin: 10px;
    }
    h1 {
        font-size: 20px;
    }
    div {
        height: 100%;
        margin: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`;
