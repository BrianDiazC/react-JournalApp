
import { CircularProgress, Grid, } from "@mui/material";


export const CheckingAuth = ({children, title = ''}) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4}}
    >
      <Grid
        item
        sx={{ width:{sm:450}}}
        display={'flex'}
        justifyContent={'center'}
      > 
      <CircularProgress color="warning"/>
      </Grid>
    </Grid>
  );
};