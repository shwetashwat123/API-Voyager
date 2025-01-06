import { makeStyles } from "@mui/styles"
const useStyles = makeStyles({
    logo: {
        width: 220,
        height: 200,
        padding: 4,
        // marginLeft: '10px'
        // border:'1px solid black'
    }
});


function Header() {


    const image = useStyles();


    const logo = "https://blog.postman.com/wp-content/uploads/2021/02/join-postman-postmanaut.png";


    return (
        <>
            <img src={logo} className={image.logo} />
        </>
    )
}
export default Header;