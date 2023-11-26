import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({   prompt: 'select_account'})

export const singInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    // const credentials =  GoogleAuthProvider.credentialFromResult(result);
    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      // User info
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    console.log(error);

    const errorCode = error.code;
    const errorMessage = error.message;
    return {
      ok: false,
      errorMessage
    };
  }
};


export const registerUserWithEmailPassword = async ({email, password, displayName}) => {

    try {
      const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password );
      const {uid, photoURL} =  resp.user;
      //TODO: Actualizar el displayName en Firebase
      //Para saber cual es el usuario actual y poder actualizarlo
      await updateProfile(FirebaseAuth.currentUser, {displayName}); 
      
      return {
        ok: true,
        uid, photoURL, email, displayName
      }

    } catch (error) {
      // console.log(error);
      if( error.code === 'auth/email-already-in-use'){
          return{
            ok: false,
            errorMessage:'El usuario ya existe!'
          }
      }
    }
}

export const loginWithEmailPassword = async ({email, password}) => {

   try {
    
    const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
    const {uid, photoURL, displayName} = resp.user;

    return {
      ok: true,
      uid, photoURL, displayName
    }
   
   } catch (error) {
      if(error.code === 'auth/invalid-login-credentials'){
        return {
          ok:false,
          errorMessage: 'El correo/contraseña son incorrectos'
        }
      }
   }
}

export const logoutFirebase = async() => {
  return await FirebaseAuth.signOut();
}
