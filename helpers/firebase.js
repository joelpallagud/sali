import firebase from '../firebase';

export async function signUp(email, password)
{
    await firebase.auth().createUserWithEmailAndPassword(email, password)
	.then(() => signIn(email, password))
	.catch(function(error){
	return error.message;
    })
}

export function doPasswordsMatch(password, confirmPassword)
{
    return (password === confirmPassword);
}

export async function signIn(email, password)
{
    await firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(function(error){
	return error.message;
    })
    return true;
}
