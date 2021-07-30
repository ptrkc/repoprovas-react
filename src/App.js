import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import ProfessorsPage from "./components/ProfessorsPage/ProfessorsPage";
import { ResetCSS } from "./styles/ResetCSS";

function App() {
    return (
        <BrowserRouter>
            <ResetCSS />
            {/* <Header /> */}
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/professores">
                    <ProfessorsPage />
                </Route>
                {/* <Route exact path="/professores/:id">
                    <ProfessorPage />
                </Route> */}
                {/* <Route exact path="/disciplinas">
                    <DisciplinesPage />
                </Route> */}
                {/* <Route exact path="/disciplinas/:id">
                    <DisciplinePage />
                </Route> */}
                {/* <Route exact path="/enviar">
                    <SendPage />
                </Route>
                <Route exact path="/visualizar/:id">
                    <ViewPage />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route> */}
            </Switch>
        </BrowserRouter>
    );
}

export default App;
