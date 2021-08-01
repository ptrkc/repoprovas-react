import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CategoriesPages from "../styles/CategoriesPages";

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
        <CategoriesPages>
            <h1>{discipline}</h1>
            <ul>
                {exams.map((e) => (
                    <li>
                        <Link to={`/prova/${e.id}`} key={e.id}>
                            {e.year}.{e.semester} - {e.professor.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </CategoriesPages>
    );
}
