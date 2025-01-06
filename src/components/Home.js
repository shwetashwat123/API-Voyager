import Header from "./header";
import Form from "./form";
import NewTabs from "./tab";
import { Box } from "@mui/material";
import Response from "./response";
import Error from "./errorscreen";
import Data, { dataContext } from '../context/dataprovider';
import { useContext } from "react";
import { checkParams } from "./utils/checkParams";
import SnackBar from "./snackBar";
import { useState } from "react";
import getData from "./service/utils";
import SelectTable from "./table";
import { makeStyles } from "@mui/styles"
const useStyles = makeStyles({
    logo: {
        width: "20vw",
        // height: 100,
        margin: 'auto',
        padding: 4,
        left: 0,
        marginLeft: '1200px',
        marginTop: '-90px'
        // marginLeft: '10px'
        //  border:'1px solid black'
    }
});
function Home() {
    const image = useStyles();
    const { formData, headerData, paramData, jsonText } = useContext(dataContext);

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [errorResponse, setErrorResponse] = useState(false);
    const [apiResponse, setApiResponse] = useState({});

    const onSendClick = async () => {
        if (!checkParams(formData, headerData, paramData, jsonText, setErrorMessage)) {
            setError(true)
            return false;
        }
        let response = await getData(formData, headerData, paramData, jsonText)

        if (response === 'error') {
            setErrorResponse(true);
            return;
        }
        setErrorResponse(false);
        setApiResponse(response.data);
    }

    return (
        <>
            <Box sx={{
                // background: "lightgrey"
                background: 'linear-gradient(to bottom right, #D9D9D9,#FF6C37)',
            }}>
                <Header />
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '59%',
                    margin: 'auto',
                    marginTop: '-150px',
                    gap: '16px',
                    // border:'1px solid darkblue',
                    height: 'auto',

                    borderRadius: '10px', // Rounded corners
                    padding: '20px', // Space around content
                    // boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', // Shadow for depth
                    background: "#D9D9D9",
                    // transform: "scale(1.1)", // Enlarges component slightly
                    boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.5)"
                }}>

                    <Form onSendClick={onSendClick} />
                    <NewTabs />

                    {errorResponse ? <Error /> : <Response data={apiResponse} />}

                    {error && <SnackBar error={error} setError={setError} errorMessage={errorMessage} />}
                </Box>
                <Box sx={{
                    display: 'flex'
                }}><img className={image.logo} src="https://voyager.postman.com/illustration/get-in-touch-postman-hoverboard-illustration.svg" />
                </Box>



            </Box>

        </>
    )
}

export default Home;
