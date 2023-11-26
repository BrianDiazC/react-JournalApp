import {  IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import {  NoteView, NothingSelectedView } from "../views";
import { AddOutlined } from "@mui/icons-material";



export const JournalPage = () => {
  return (
    <JournalLayout>
      <NothingSelectedView/>
        {/* NoteView */}
        {/* <NoteView/> */}

      {/* NothingSelected */}
 
     <IconButton
      size="large"
      sx={{
        color:'white', 
        backgroundColor:'error.main',
        ':hover': {backgroundColor: 'error.main', opacity:0.9},
        position: 'fixed',
        right: 50,
        bottom:50
      }}  
     >
      <AddOutlined sx={{fontSize: 30}}/>
     </IconButton>

    </JournalLayout>
  );
}; 



 


      {/* <Typography >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
        cupiditate in? Delectus assumenda quia repellat quidem eveniet.
        Recusandae ut omnis dolorum consectetur odit tempore commodi facere
        explicabo velit, similique vitae!
      </Typography> */}