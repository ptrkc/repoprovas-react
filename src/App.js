import { BrowserRouter, Switch, Route } from "react-router-dom";
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
                    <ProfessorsPage />
                </Route>
                <Route exact path="/professores/:id">
                    <ProfessorPage />
                </Route>
                <Route exact path="/disciplinas">
                    <DisciplinesPage />
                </Route>
                <Route exact path="/disciplinas/:id">
                    <DisciplinePage />
                </Route>
                <Route exact path="/enviar">
                    <SendPage />
                </Route>
                <Route exact path="/prova/:id">
                    <ExamPage />
                </Route>
                {/* <Route path="*">
                    <NotFound />
                </Route> */}
            </Switch>
        </BrowserRouter>
    );
}

export default App;
