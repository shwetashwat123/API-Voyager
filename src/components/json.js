import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { Typography } from '@mui/material';


import { useContext } from 'react';
import { dataContext } from '../context/dataprovider';


const textareaStyle = {
    width: '100%',
    background:'yellow',
    background:'url(http://i.imgur.com/2cOaJ.png)',
    backgroundAttachment:'local',
    backgroundRepeat:'no-repeat',


    // paddingLeft:35,
    // paddingTop:13,
    // padding:'10',
}

function JsonText() {

const{setJsonText}=useContext(dataContext)

const handleJsonText=(e)=>{
    setJsonText(e.target.value)
}
    return (
        <>

            <Typography mt={2} mb={2} align="left">JSON</Typography>
            <TextareaAutosize minRows={3} maxRows={5} align='left' style={textareaStyle}
            onChange={handleJsonText}
            
            > </TextareaAutosize>
        </>
    )
}
export default JsonText;



