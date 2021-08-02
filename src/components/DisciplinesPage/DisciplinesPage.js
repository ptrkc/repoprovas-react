import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoriesPages from "../styles/CategoriesPages";

export default function DisciplinesPage() {
    const [disciplines, setDisciplines] = useState({
        0: [],
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: [],
    });
    useEffect(() => {
        getDisciplines();
    }, []);
    function getDisciplines() {
        const req = axios.get(`${process.env.REACT_APP_API_URL}/disciplines`);
        req.then((res) => {
            const resDisciplines = {
                0: [],
                1: [],
                2: [],
                3: [],
                4: [],
                5: [],
                6: [],
                7: [],
                8: [],
            };
            res.data.forEach((e) => {
                resDisciplines[e.semester].push(e);
            });
            setDisciplines(resDisciplines);
        });
    }
    function renderDisciplinesBySemester(semester) {
        let name;
        if (!disciplines || !disciplines[semester].length) {
            return null;
        }
        name = semester ? `${semester}° Período` : `Eletivas`;
        return (
            <>
                <h1>{name}</h1>
                <ul>
                    {disciplines[semester].map((d) => (
                        <li key={d.id}>
                            <Link to={`/disciplinas/${d.id}`}>
                                ({d.exams}) {d.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </>
        );
    }

    return (
        <CategoriesPages>
            <h1>Disciplinas:</h1>
            {renderDisciplinesBySemester(0)}
            {renderDisciplinesBySemester(1)}
            {renderDisciplinesBySemester(2)}
            {renderDisciplinesBySemester(3)}
            {renderDisciplinesBySemester(4)}
            {renderDisciplinesBySemester(5)}
            {renderDisciplinesBySemester(6)}
            {renderDisciplinesBySemester(7)}
            {renderDisciplinesBySemester(8)}
        </CategoriesPages>
    );
}
