import { TextField } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import Checkbox from '@mui/material/Checkbox';
import { Box } from '@mui/material';
import { useState } from 'react';
function Row({ addRows, rowId, Data, setData }) {


    const [checkCheckbox, setCheckCheckbox] = useState(false);


    // console.log(rowId)



    const handleText = (e) => {
        // e.target.name tells you which input field ('key' or 'values') triggered the event.
        // e.target.value gives the new value entered into that field.
        // console.log(e.target.name, e.target.value)

        console.log(Data);


        //         Why Is Picking the 0th Element Needed?
        // You need the 0th element because filter always returns an array, even if there is only one matching element. You are working with an object, so you must extract the first element from the array to work with the actual data.

        // For example:

        // Without [0]:
        // javascript
        // Copy code
        // let result = Data.filter(entry => entry.id === rowId);
        // console.log(result); 
        // // Output: [{ id: 1, key: 'Name', value: 'John' }] (an array)
        // With [0]:
        // javascript
        // Copy code
        // let result = Data.filter(entry => entry.id === rowId)[0];
        // console.log(result); 
        // // Output: { id: 1, key: 'Name', value: 'John' } (an object)
        // You cannot directly update properties on an array (e.g., result.key = 'New Value' would throw an error). Therefore, extracting the object from the array is necessary.

        // let result = Data.find(entry => entry.id === rowId);  // to find the single
        let result = Data.filter(entry => entry.id === rowId)[0];
        // console.log(result)

        result = { ...result, id: rowId, [e.target.name]: e.target.value }; // if data exists :{id:3,key:ishu,id:3,key:shailu}

        // console.log(result)

        let index = Data.findIndex(value => value.id === rowId);   // to check if the itemm is already present or not

        if (index === -1) {
            setData(oldArr => [...oldArr, result])
        } else {
            const newArray = Object.assign([...Data], {
                [index]: result
            })
            setData(newArray);
        }
        console.log(Data);

    }



    const handleChange = (e) => {
        let result = Data.filter(entry => entry.id === Number(e.target.name))[0];
        console.log(result);
        if (!checkCheckbox) {
            setCheckCheckbox(true)
            addRows(oldArr => [...oldArr, rowId])
            result = { ...result, id: rowId, check: true }
        } else {
            setCheckCheckbox(false)
            result = { ...result, id: rowId, check: false }
        }
        let index = Data.findIndex(value => value.id === Number(e.target.name));   // to check if the itemm is already present or not

        if (index === -1) {
            setData(oldArr => [...oldArr, result])
        } else {
            const newArray = Object.assign([...Data], {
                [index]: result
            })
            setData(newArray);
        }
        console.log(Data);
    }



    return (
        <>
            <Box sx={{ width: '100%' }}>
                <TableCell sx={{ border: '1px solid lightgrey' }} align="left">
                    <Checkbox checked={checkCheckbox}
                        onChange={handleChange}
                        name={rowId}
                    />
                </TableCell>
                <TableCell sx={{ height: '20px' }} align="left"><TextField name='key' onChange={handleText} inputProps={{ style: { height: '5px', width: '350px' } }} />
                </TableCell>
                <TableCell sx={{ width: 'auto' }} align="left">
                    <TextField name='value'
                        // The name property is used in your code to uniquely identify each input field (key and values)
                        // e.target.name retrieves the name of the field that triggered the event (e.g., 'key' or 'values').
                        // This allows you to distinguish between the two inputs and handle their changes appropriately.
                        onChange={handleText} inputProps={{ style: { height: '5px', width: '350px' } }} />
                </TableCell>
            </Box>
        </>
    )
}
export default Row;