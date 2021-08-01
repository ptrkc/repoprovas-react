import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CategoriesPages from "../styles/CategoriesPages";
export default function ProfessorsPage() {
    const [exams, setExams] = useState([]);
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
            setExams(res.data.exams);
            setProfessor(res.data.professor);
            console.log(res.data);
        });
    }

    return (
        <CategoriesPages>
            <h1>{professor}</h1>
            <ul>
                {exams.map((e) => (
                    <li>
                        <Link to={`/prova/${e.id}`} key={e.id}>
                            {e.year}.{e.semester} - {e.discipline.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </CategoriesPages>
    );
}
