import { useMemo } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {  useForm } from "../../hooks";
import { Google } from "@mui/icons-material";
import { Button, Grid, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { startGoogleSignIn, startLoginWithEmailPassword} from '../../store/auth'
import { AlertErrorMessage,  } from '../../ui';
import { FirebaseAuth } from '../../firebase/config';
import { onAuthStateChanged } from 'firebase/auth';




export const LoginPage = () => {

  const dispatch = useDispatch();
  const {status, errorMessage} = useSelector((state) => state.auth)

 
  const {formState, email, password, onInputChange} = useForm({
    email: 'Correo@gmail.com',
    password: '123456'
  });

  const isAuthenticating = useMemo( ()=> status === 'checking', [status])


  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(startLoginWithEmailPassword(formState))
  }

  const onGoogleSignIn =()=>{
    console.log('OnGoogle Sigin')
    dispatch( startGoogleSignIn() );
  }



  return (
 
      <AuthLayout title='Login'>
        <form 
          className="animate__animated animate__fadeIn animate__faster"
          onSubmit={onSubmit}>
          <Grid container  >
            <Grid item xs={12} mt={3}>
              <TextField 
                label="Correo"
                type="email"
                placeholder="Correo@google.com"
                fullWidth
                autoComplete="on"
                name="email"
                value = {email}
                onChange={onInputChange}
              />
            </Grid >

            <Grid item xs={12} my={3}>
              <TextField 
                label="Contraseña"
                type="password"
                placeholder="Contraseña"
                fullWidth
                autoComplete="on"
                name="password"
                value = {password}
                onChange={onInputChange}
              />
            </Grid>

            <Grid container spacing={2}>

              {!!errorMessage && <AlertErrorMessage severity={'error'} errorMessage={errorMessage}/> }
          
                <Grid item xs={12} sm={6}  >
                  <Button 
                    variant="contained" 
                    type="submit"
                    fullWidth
                    disabled={isAuthenticating}
                  >Login</Button>
                </Grid>
                <Grid item xs={12} sm={6}  >
                  <Button 
                    variant="contained" 
                    fullWidth 
                    startIcon={<Google/> }
                    onClick={onGoogleSignIn}
                    disabled={isAuthenticating}
                  >Google</Button>
                </Grid>
            </Grid>


            <Grid container direction="row" justifyContent="end">
              <Link component={<Link/>} color="inherit" to="/auth/register">
              Crear una cuenta
              </Link>

            </Grid>

          </Grid> 
        </form>
        </AuthLayout> 
  );
};


