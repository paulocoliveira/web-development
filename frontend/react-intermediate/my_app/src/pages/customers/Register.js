import { useState } from "react"
import axios from "axios"
import { makeStyles } from '@material-ui/core/styles'

import {
    TextField,
    Button,
} from '@material-ui/core'

import Toasty from "../../components/Toasty"

const useStyles = makeStyles((theme) => ({
    wrapper: {
        margin: theme.spacing(3),
    },
}))

const Register = () => {
    const classes = useStyles();
    const [form, setForm] = useState({
        name: {
            value: "",
            error: false,
        },
        role: {
            value:"",
            error: false,
        },
    })

    const [openToasty, setOpenToasty] = useState(false)
    
    const [isLoading, setIsLoading] = useState(false)

    const handleInputChange = (e) => {
        const {name, value} = e.target
        setForm({
            ...form,
            [name]: {
                value,
            },
        })
    }

    const handleRegisterButton = () => {
        setIsLoading(true)
        let hasError = false
        let newFormState = {
            ...form,
        }
        
        if (!form.name.value){
            hasError = true
            newFormState.name = {
                value: form.name.value,
                error: true,
                helperText: "Invalid name"
            }
        }

        if (!form.role.value){
            hasError = true
            newFormState.role = {
                value: form.role.value,
                error: true,
                helperText: "Invalid role"
            }
        }

        if (hasError){
            return setForm(newFormState)
        }

        axios.post("https://reqres.in/api/users", {
            name: form.name.value,
            role: form.role.value,
        }).then((response) => {
            setOpenToasty(true)
            form.name.value = ""
            form.role.value = ""
            setIsLoading(false)
        })
    }

    return(
        <>
            <div className={classes.wrapper}>
                <TextField error={form.name.error} helperText={form.name.error ? form.name.helperText : ""} label="Name" name="name" value={form.name.value} onChange={handleInputChange} />
            </div>
            <div className={classes.wrapper}>
                <TextField error={form.role.error} helperText={form.role.error ? form.role.helperText : ""} label="Role" name="role" value={form.role.value} onChange={handleInputChange} />
            </div>
            <div className={classes.wrapper}>
            <Button variant="contained" color="primary" onClick={handleRegisterButton} disabled={isLoading}>
                {
                    isLoading ? "Loading..." : "Register"
                }
            </Button>
            <Toasty open={openToasty} severity="success" message="Customer registered successfully!" onClose={() => setOpenToasty(false)}/>
            </div>

        </>
    )
}

export default Register