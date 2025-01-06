import { MenuItem, Select, Box, TextField, Button } from "@mui/material";
import { dataContext } from "../context/dataprovider";
import { useContext } from "react";

// import { DataContext } from "../context/dataprovider";

function Form({onSendClick}) {

    const { formData, setFormData } = useContext(dataContext);

    const handleUrl = (e) => {
        setFormData({ ...formData, url: e.target.value })
        console.log(formData);

    }

    const handleChange = (e) => {
        setFormData({ ...formData, type: e.target.value })
        console.log(formData)
    }


    return (
        <>

            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: "-4px",
                width:'100%',
                // marginTop:'10px '

            }}>
                <Select
                    onChange={handleChange}
                    value={formData.type}
                    label="Post"
                    sx={{
                        width: '140px',
                        height: '40px'

                    }}
                    size="small"
                >
                    <MenuItem size="small" value={'Post'}>POST</MenuItem>
                    <MenuItem value={'Get'} >GET</MenuItem>

                </Select>
                <TextField onChange={handleUrl} size="small" id="outlined-basic" label="Enter URL or Paste Text" variant="outlined" sx={{ width: '80%', fontSize: '2px' }} />
                <Button onClick={onSendClick} variant="contained" sx={{ padding: '15px', marginLeft: '4px', height: '40px' }}>Send</Button>
            </Box>

        </>
    )
}
export default Form;
