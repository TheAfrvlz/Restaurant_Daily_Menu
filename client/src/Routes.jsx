import { Router,Route,Switch } from "react-router-dom";
import DailyCalendarPost from "./DailyCalendarPost";
import DailyCalendar from "./DailyCalendar";
import Menu from "./Menu"

function Routes(){

    return(
        <Router>
            <Switch>
                <Route exact path="/">
                    <DailyCalendar/>
                </Route>
                <Route exact path="/Post">
                    <DailyCalendarPost/>
                </Route>
                <Route exact path="/">
                    <Menu/>
                </Route>
            </Switch>
        </Router>
    );
}
