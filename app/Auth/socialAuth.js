import auth from '@react-native-firebase/auth';
import { Platform, ToastAndroid } from 'react-native';
const toastPrompt=(msg)=>{
  if (Platform.OS === 'android') {
    ToastAndroid.show(msg, ToastAndroid.SHORT)
  } else {
    // alert(msg);
  }
}
const Signup = async (email,password,props) =>{
    await auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('User account created & signed in!');

    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        toastPrompt('That email address is already in use!');
      }
      else if (error.code === 'auth/invalid-email') {
        toastPrompt('That email address is invalid!');
      }
      console.error(error);
    });
}
const Signin = async (email,password,props) =>{
    await auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      toastPrompt('signed in!');

    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        toastPrompt('That email address is already in use!');
      }
      else if (error.code === 'auth/invalid-email') {
        toastPrompt('That email address is invalid!');
      }
      console.error(error);
    });
}
export const FireAuth ={
    Signup,
    Signin,
}