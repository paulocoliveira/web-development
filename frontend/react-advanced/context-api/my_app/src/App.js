import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"

import TemplateDefault from "./templates/Default"
import TemplatePage from "./templates/Page"
import TemplateClean from "./templates/Clean"

import CustomersList from "./pages/customers/List"
import CustomersRegister from "./pages/customers/Register"

import Home from "./pages/Home"
import Login from "./pages/Login"

import { AuthProvider } from "./state/auth"

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path = "/login">
                    <TemplateClean title="Restricted Access" Component={Login} />
                </Route>
                <TemplateDefault>
                    <Route path="/customers/add">
                        <TemplatePage title="Customers Register" Component={CustomersRegister} />
                    </Route>
                    <Route path="/customers">
                        <TemplatePage title="Customers List" Component={CustomersList} />
                    </Route>
                    <Route path="/">
                        <TemplatePage title="Home" Component={Home} />
                    </Route>
                </TemplateDefault>
            </Switch>
        </Router>
    )
}

export default App;
