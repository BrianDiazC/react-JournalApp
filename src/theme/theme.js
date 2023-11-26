import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";


 const theme = createTheme({
    palette: {
        primary: {
          main: '#262254',
        },
        secondary: {
          main: '#85093a',
        },
        error:{
        main: red[900]
        } 
      },
})

export default theme;