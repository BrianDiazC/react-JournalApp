import { Alert, Grid } from "@mui/material"


export const AlertErrorMessage = ({errorMessage, severity})=> {
    return (
      <Grid item xs={12} >
          <Alert 
            severity={severity}
            >{errorMessage}
          </Alert> 
      </Grid>
      
  )
}
