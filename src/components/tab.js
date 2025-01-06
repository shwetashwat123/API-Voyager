import Box from '@mui/material/Box';
import { Tab, Tabs } from '@mui/material';
import { useContext, useState } from 'react';
import { makeStyles } from '@mui/styles';
import SelectTable from './table';
import JsonText from './json';
import { dataContext } from '../context/dataprovider';


const useStyles = makeStyles({
  tabs: {
    textTransform:
      ['none', '!important']

  }
})
function NewTabs() {

  const [value, setValue] = useState(0)
  
  const { headerData, setHeaderData, paramData, setParamData } = useContext(dataContext)
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <Box sx={{
      textAlign: 'center',
      margin: 'auto',
      width: '100%'
    }}>
      <Tabs TabIndicatorProps={{
        style: {
          height: 2, bottom: 5, backgroundColor: 'orange', textTransform: ['none', ['!important']]
        }
      }} value={value} onChange={handleChange} >
        <Tab label="Params" className={classes.tabs} />
        <Tab label="Header" className={classes.tabs} />
        <Tab label="Body" className={classes.tabs} />
      </Tabs>
      <Box sx={{ border: 'none' }}>
        <Box role="tabpanel"
          hidden={value !== 0}
          id={`simple-tabpanel-${0}`}
          aria-labelledby={`simple-tab-${0}`}>
          <SelectTable text={'Query params'} Data={paramData} setData={setParamData} />

        </Box>
        <Box role="tabpanel"
          hidden={value !== 1}
          id={`simple-tabpanel-${1}`}
          aria-labelledby={`simple-tab-${1}`}>
          <SelectTable text={'header'} Data={headerData} setData={setHeaderData} />

        </Box>
        <Box role="tabpanel"
          hidden={value !== 2}
          id={`simple-tabpanel-${2}`}
          aria-labelledby={`simple-tab-${2}`}>

          <JsonText />

        </Box>
      </Box>
    </Box >


  )

}
export default NewTabs;