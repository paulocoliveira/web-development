import { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { TextField, Button, Typography } from "@material-ui/core"

import {useHistory} from "react-router-dom"

import useAuth from "../state/auth"

const useStyles = makeStyles((theme) => ({
    wrapper: {
        margin: theme.spacing(3)
    }
}))

const Login = () => {
    const classes = useStyles()
    const history = useHistory()

    const [form, setForm] = useState({
        email:"",
        password:""
    })

    const [isLoading, setIsLoading] = useState(false)

    const { user, setUser} = useAuth()

    const handleInputChange = e => {
        const { name, value } = e.target
    
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleFormSubmit = () => {
        setIsLoading(true)

        setTimeout(() => {
            const response = {
                success: true,
                user:{
                    email: form.email
                }
            }

            setUser({
                logged: response.success,
                email: response.user.email
            })

            if (response.success){
                history.push("/")
            }else{
                setIsLoading(false)
                history.push("/login")
            }

        }, 4000)
    }

    return(
        <>
            <Typography variant="h3">Restricted Access</Typography>

            <div className={classes.wrapper}>
                <TextField
                    onChange={handleInputChange}
                    label="E-mail"
                    name="email"
                />
            </div>
            <div className={classes.wrapper}>
                <TextField
                    onChange={handleInputChange}
                    label="Password"
                    name="password"
                    type="password"
                />
            </div>
            <div className={classes.wrapper}>
                <Button variant="contained" color="primary" onClick={handleFormSubmit}>
                    {
                        isLoading ? "Loading..." : "Sign In"
                    }
                </Button>
            </div>
        </>
    )
}

export default Login