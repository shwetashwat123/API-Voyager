import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { Typography } from '@mui/material';



const textareaStyle = {
    width: 'auto',
    background: 'yellow',
    padding: '10',
    background: 'url(http://i.imgur.com/2cOaJ.png)',
    backgroundAttachment: 'local',
    backgroundRepeat: 'no-repeat',
    paddingLeft: 35,
    paddingTop: 13,
    marginBottom:'50px'

}

function Response({ data }) {

    let obj = data;
    let readableObj = '{\n'

    for (let key in obj) {
        readableObj += '\t'
        readableObj += (typeof obj[key] === 'string') ? `${key} : " ${obj[key]} "` : `${key} :  ${obj[key]} `
        if (Object.keys(obj).pop() !== key.toString()) {
            readableObj += ',\n'
        }
    }
    readableObj += '\n}'
    return (
        <>

            <Typography mt={2} mb={2} align="left">Response</Typography>
            <TextareaAutosize minRows={3}
                maxRows={5}
                align='left'
                style={textareaStyle}
                value={readableObj}
                disabled="disabled"
            >
            </TextareaAutosize>

        </>
    )
}
export default Response;