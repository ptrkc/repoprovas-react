import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CategoriesPages from "../styles/CategoriesPages";
export default function ProfessorsPage() {
    const [exams, setExams] = useState({ 1: [], 2: [], 3: [], 4: [], 5: [] });
    const [professor, setProfessor] = useState("");
    const { id } = useParams();
    useEffect(() => {
        getExams();
        // eslint-disable-next-line
    }, []);
    function getExams() {
        const req = axios.get(
            `${process.env.REACT_APP_API_URL}/professors/${id}/exams`
        );
        req.then((res) => {
            const resExams = { 1: [], 2: [], 3: [], 4: [], 5: [] };
            res.data.exams.forEach((e) => {
                resExams[e.type.id].push(e);
            });
            setExams(resExams);
            setProfessor(res.data.professor);
            console.log(res.data);
        });
    }
    function renderExamsByType(typeKey, typeName) {
        if (!exams || !exams[typeKey].length) {
            return null;
        }
        return (
            <>
                <h1>{typeName}</h1>
                <ul>
                    {exams[typeKey].map((e) => (
                        <li key={e.id}>
                            <Link to={`/prova/${e.id}`}>
                                {e.year}.{e.semester} - {e.discipline.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </>
        );
    }

    return (
        <CategoriesPages>
            <h1>{professor}</h1>
            {renderExamsByType(1, "Prova 1")}
            {renderExamsByType(2, "Prova 2")}
            {renderExamsByType(3, "Prova 3")}
            {renderExamsByType(4, "2ª Chamada")}
            {renderExamsByType(5, "Outras")}
        </CategoriesPages>
    );
}
