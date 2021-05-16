import { Route, Switch } from "react-router-dom";

import { Home, Success } from "./pages";

function App() {
    return (
        <>
            <Switch>
                <Route path="/success">
                    <Success />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </>
    );
}

export default App;
