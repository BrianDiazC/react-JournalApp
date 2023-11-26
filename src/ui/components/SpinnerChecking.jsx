import { Box, CircularProgress, Grid } from "@mui/material"

export const SpinnerCheking = ()=> {

    return (
      <Grid
      item xs={12} 
      justifyContent="center"
      >   <Box 
            display={'flex'}
            justifyContent={'center'}
          >
            <CircularProgress/>
        </Box>
        </Grid>
    )
  }