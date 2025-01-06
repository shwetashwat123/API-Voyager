import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
    image: {
        margin: 'auto',
        background:'blue',
        borderRadius:'8px'
    }
})


function Error() {


    const classes = useStyles()

    return (
        <>

            <img src="https://developer.trackvia.com/_next/static/media/postman1c.eaaca536.png" className={classes.image} />
        </>
    )
}
export default Error;