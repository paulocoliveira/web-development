import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"

import TemplateDefault from "./templates/Default"
import TemplatePage from "./templates/Page"

import CustomersList from "./pages/customers/List"
import CustomersRegister from "./pages/customers/Register"

import Home from "./pages/Home"

const App = () => {
    return (
        <Router>
            <TemplateDefault>
                <Switch>
                    <Route path="/customers/add">
                        <TemplatePage title="Customers Register" Component={CustomersRegister} />
                    </Route>
                    <Route path="/customers">
                        <TemplatePage title="Customers List" Component={CustomersList} />
                    </Route>
                    <Route path="/">
                        <TemplatePage title="Home" Component={Home} />
                    </Route>
                </Switch>
            </TemplateDefault>
        </Router>
    )
}

export default App;