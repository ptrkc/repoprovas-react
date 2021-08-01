import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import SelectArray from "./SelectArray";
import SelectObject from "./SelectObject";

export default function Header() {
    const history = useHistory();
    const [disciplines, setDisciplines] = useState([]);
    const [professors, setProfessors] = useState([]);
    const [disciplineId, setDisciplineId] = useState();
    const [professorId, setProfessorId] = useState();
    const [semester, setSemester] = useState(1);
    const [typeId, setTypeId] = useState("P1");
    const [examURL, setExamURL] = useState("");
    const [year, setYear] = useState("2021");
    const types = [
        { id: 1, name: "P1" },
        { id: 2, name: "P2" },
        { id: 3, name: "2ch" },
        { id: 4, name: "Outra" },
    ];
    const years = [
        "2021",
        "2020",
        "2019",
        "2018",
        "2017",
        "2016",
        "2015",
        "2014",
        "2013",
        "2012",
        "2011",
        "2010",
        "2009",
        "2008",
        "2007",
        "2006",
        "2005",
        "2004",
        "2003",
        "2002",
        "2001",
        "2000",
    ];
    useEffect(() => {
        getDisciplines();
    }, []);
    useEffect(() => {
        if (disciplineId) updateProfessors();
        // eslint-disable-next-line
    }, [disciplineId]);

    function updateProfessors() {
        const discipline = disciplines.find((d) => d.id === disciplineId);
        const sortedProfessors = discipline.professors.sort(
            (a, b) => (a.name > b.name) - (a.name < b.name)
        );
        setProfessors(sortedProfessors);
        setProfessorId(sortedProfessors[0].id);
    }

    function getDisciplines() {
        const req = axios.get(
            `${process.env.REACT_APP_API_URL}/disciplines/professors`
        );
        req.then((res) => {
            setDisciplines(res.data);
            setDisciplineId(res.data[0].id);
        });
    }
    console.log(disciplineId);
    function sendExam(e) {
        e.preventDefault();
        if (!examURL.trim()) {
            return alert("Link do PDF obrigatório");
        }
        const body = {
            disciplineId: disciplineId,
            professorId: professorId,
            year,
            semester: parseInt(semester),
            typeId,
            examURL,
        };
        axios
            .post(`${process.env.REACT_APP_API_URL}/exams`, body)
            .then(() => {
                alert("Prova enviada!");
                history.push("/");
            })
            .catch((e) => alert("Erro, tente novamente."));
    }

    return (
        <SendForm onSubmit={sendExam}>
            <h1>Envie uma prova:</h1>
            <h1>Selecione uma disciplina:</h1>
            <SelectObject
                value={disciplineId}
                setValue={setDisciplineId}
                options={disciplines}
            />
            <h1>Selecione um professor:</h1>
            <SelectObject
                value={professorId}
                setValue={setProfessorId}
                options={professors}
            />
            <h1>Selecione um ano e semestre:</h1>
            <div>
                <SelectArray value={year} setValue={setYear} options={years} />.
                <SelectArray
                    value={semester}
                    setValue={setSemester}
                    options={[1, 2]}
                />
            </div>
            <h1>Selecione um tipo de prova:</h1>
            <SelectObject value={typeId} setValue={setTypeId} options={types} />
            <h1>Cole a URL do PDF da prova:</h1>
            <input
                value={examURL}
                onChange={(e) => setExamURL(e.target.value)}
            />
            <button>Enviar!</button>
        </SendForm>
    );
}

const SendForm = styled.form`
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
