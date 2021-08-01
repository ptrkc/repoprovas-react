import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoriesPages from "../styles/CategoriesPages";

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
    console.log(disciplines);
    return (
        <CategoriesPages>
            <h1>Disciplinas:</h1>
            <ul>
                {disciplines.map((d) => (
                    <li>
                        <Link to={`/disciplinas/${d.id}`} key={d.id}>
                            {d.name} ({d.exams})
                        </Link>{" "}
                    </li>
                ))}
            </ul>
        </CategoriesPages>
    );
}
