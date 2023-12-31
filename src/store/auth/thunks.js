import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, singInWithGoogle } from "../../firebase/provider";
import { checkingCredentials, login, logout } from "./authSlice"


export const checkingAuthentication = (email, password) => {
    return async( dispatch ) => {
        dispatch(checkingCredentials());

    }
}

export const startGoogleSignIn = () => {
    return async( dispatch ) => {
        dispatch(checkingCredentials());
        const result =  await singInWithGoogle();
        if(!result.ok) return dispatch(logout(result.errorMessage));

        dispatch(login(result))
        console.log({result});
    }
}

export const startCreatingUserWithEmailPassword = ({displayName, password, email})=> {

    return async(dispatch) => {
        dispatch(checkingCredentials());

        const {ok, uid, photoURL, errorMessage} = await registerUserWithEmailPassword({password, displayName, email});
        if(!ok) return dispatch(logout({errorMessage}));

        dispatch(login({uid, displayName, email, photoURL }));
       
    }
}

export const startLoginWithEmailPassword = ({password, email})=> {

    return async(dispatch) => {
        dispatch( checkingAuthentication());

        const {ok, uid, errorMessage, photoURL, displayName} = await loginWithEmailPassword({email, password});
        if(!ok) return dispatch(logout({errorMessage}));

        dispatch(login({uid, displayName, photoURL, email}));
    }
}

export const startLogout = ()=> {

    return async(dispatch)=>{

        await logoutFirebase();
        dispatch(logout());

    }
}