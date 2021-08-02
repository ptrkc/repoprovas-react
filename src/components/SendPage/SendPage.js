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
    const [typeId, setTypeId] = useState(1);
    const [examURL, setExamURL] = useState("");
    const [year, setYear] = useState("2021");
    const types = [
        { id: 1, name: "P1" },
        { id: 2, name: "P2" },
        { id: 3, name: "P3" },
        { id: 4, name: "2ª Chamada" },
        { id: 5, name: "Outra" },
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

    function sendExam(e) {
        e.preventDefault();
        if (!examURL.trim()) {
            return alert("Link do PDF obrigatório");
        }
        if (!isURL(examURL)) {
            return alert("Insira uma link válido");
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
            .then((response) => {
                alert("Prova enviada!");
                history.push(`/prova/${response.data[0].id}`);
            })
            .catch((e) => alert("Erro, tente novamente"));
    }

    function isURL(url) {
        const re =
            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;
        return re.test(String(url).toLowerCase());
    }

    return (
        <SendForm onSubmit={sendExam}>
            <h1>Envie uma prova:</h1>
            <p>Disciplina:</p>
            <SelectObject
                value={disciplineId}
                setValue={setDisciplineId}
                options={disciplines}
            />
            <p>Professor(a):</p>
            <SelectObject
                value={professorId}
                setValue={setProfessorId}
                options={professors}
            />
            <p>Ano e semestre:</p>
            <div>
                <SelectArray value={year} setValue={setYear} options={years} />.
                <SelectArray
                    value={semester}
                    setValue={setSemester}
                    options={[1, 2]}
                />
            </div>
            <p>Tipo de prova:</p>
            <SelectObject value={typeId} setValue={setTypeId} options={types} />
            <p>Cole o link do PDF da prova:</p>
            <input
                value={examURL}
                onChange={(e) => setExamURL(e.target.value)}
                placeholder="https://exemplo.com/arquivo.pdf"
                required
            />
            <button>Enviar!</button>
        </SendForm>
    );
}

const SendForm = styled.form`
    margin: 10px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    & > * {
        margin: 5px;
    }
    select,
    input {
        background-color: white;
        border: 1px solid #303030;
        border-radius: 5px;
        font-size: 16px;
    }
    button {
        background-image: linear-gradient(#4e4e4e, #292929);
        color: white;
        padding: 10px 40px;
        font-size: 24px;
        margin: 10px;
        width: 200px;
        border-radius: 10px;
        transition: 0.2s;
        border: none;
    }
    button:hover {
        filter: brightness(0.6);
    }
`;
