import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoriesPages from "../styles/CategoriesPages";

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
        <CategoriesPages>
            <h1>Professores:</h1>
            <ul>
                {professors.map((p) => (
                    <li key={p.id}>
                        <Link to={`/professores/${p.id}`}>
                            ({p.exams}) {p.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </CategoriesPages>
    );
}
