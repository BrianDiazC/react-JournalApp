
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { AlertErrorMessage, SpinnerCheking } from "../../ui";



const regEx = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
const formValidations = {
  email: [(value) => regEx.test(value), 'El correo es invalido'],
  password: [(value) => value.trim().length >= 6, 'El password debe tener más 6 caracteres'],
  displayName: [(value) => value.trim().length >= 1, 'El nombre es obligatorio.']
}
const formData = {
    email: '',
    password: '',
    displayName: '',
  }

export const RegisterPage = () => {
  
  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const {errorMessage, status} = useSelector((state)=> state.auth);
  const isCheckingAuthentication = useMemo(()=> status === 'checking', [status] );
  

  const {
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid
   } = useForm(formData, formValidations);


    const onSubmit = (e) => {
      e.preventDefault();
      setFormSubmitted(true)
    
      if(!isFormValid) return;

    dispatch( startCreatingUserWithEmailPassword(formState));
      
    }

  return (
   
      <AuthLayout title='Register'>
        <form
          className="animate__animated animate__fadeIn animate__faster" 
          onSubmit={onSubmit}>
          <Grid container  >

          <Grid item xs={12} mt={3}>
              <TextField 
                label="Nombre Completo"
                type="text"
                placeholder="Nombre completo"
                fullWidth
                name="displayName"
                value={displayName}
                onChange={onInputChange}
                error={ !!displayNameValid && formSubmitted }
               helperText={formSubmitted? displayNameValid : null }
              />
            </Grid >

            <Grid item xs={12} mt={3}>
              <TextField 
                label="Correo"
                type="email"
                placeholder="Correo@google.com"
                fullWidth
                name="email"
                value={email}
                onChange={onInputChange}
                error={!!emailValid && formSubmitted}
                helperText={formSubmitted ? emailValid: null }
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
                value={ password }
                onChange={onInputChange}
                error={!!passwordValid && formSubmitted}
                helperText={formSubmitted? passwordValid : null }
              />
            </Grid>
            <Grid container spacing={2}>

          {!!errorMessage && <AlertErrorMessage severity={'error'} errorMessage={errorMessage}/> }
          
                <Grid item xs={12} >
                  <Button 
                    variant="contained" 
                    fullWidth
                    disabled={isCheckingAuthentication}
                    type="submit"
                    >Crear Cuenta
                  </Button>
                </Grid>
            </Grid>

            <Grid container direction="row" justifyContent="center">
              <Typography sx={{mr:1}}>Ya tienes Cuenta?</Typography>
                <Link component={<Link/>} color="inherit" to="/auth/login">
                Ingresar
                </Link>
            </Grid> 

          </Grid> 
        </form>
        </AuthLayout>
  );
};



