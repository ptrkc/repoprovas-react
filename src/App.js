import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import ProfessorsPage from "./components/ProfessorsPage/ProfessorsPage";
import ProfessorPage from "./components/ProfessorPage/ProfessorPage";
import DisciplinePage from "./components/DisciplinePage/DisciplinePage";
import DisciplinesPage from "./components/DisciplinesPage/DisciplinesPage";
import SendPage from "./components/SendPage/SendPage";
import ExamPage from "./components/ExamPage/ExamPage";
import { ResetCSS } from "./GlobalStyles/ResetCSS";
import { GlobalStyle } from "./GlobalStyles/GlobalStyle";

function App() {
    function GoHome() {
        const history = useHistory();
        history.push("/");
        return null;
    }
    return (
        <BrowserRouter>
            <ResetCSS />
            <GlobalStyle />
            <Header />
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/professores">
                    <HomePage />
                    <ProfessorsPage />
                </Route>
                <Route exact path="/professores/:id">
                    <HomePage />
                    <ProfessorPage />
                </Route>
                <Route exact path="/disciplinas">
                    <HomePage />
                    <DisciplinesPage />
                </Route>
                <Route exact path="/disciplinas/:id">
                    <HomePage />
                    <DisciplinePage />
                </Route>
                <Route exact path="/enviar">
                    <SendPage />
                </Route>
                <Route exact path="/prova/:id">
                    <ExamPage />
                </Route>
                <Route path="*">
                    <GoHome />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
