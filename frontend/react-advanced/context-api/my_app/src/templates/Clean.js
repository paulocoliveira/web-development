import Container from '@material-ui/core/Container'
import { makeStyles } from "@material-ui/styles" 

const useStyles = makeStyles(() => ({
    container: {
        padding: "15px 0",
    }
}))


const Clean = ({ Component }) => {
    const classes = useStyles()

    return(
        <>
            <Container maxWidth="lg" className={classes.container}>
                <Component/>
            </Container>
        </>
    )
}

export default Clean