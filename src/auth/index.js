import storage from "../storage";
import JwtDecode from "jwt-decode";

const isSignedIn = async () => {
    let [token, currentUser] = await Promise.all([
        storage.getData('token'),
        storage.getData('currentUser')
    ]);

    if(token && currentUser) {
        const decoded = JwtDecode(token);
        currentUser   = JSON.parse(currentUser);

        if(
        decoded.email === currentUser.email
        && decoded.first_name === currentUser.first_name
        && decoded.last_name === currentUser.last_name
        && decoded.role === currentUser.role
        && decoded.id === currentUser.id
        && decoded.exp === currentUser.exp
        && decoded.iat === currentUser.iat
        ) {
            if(Date.now() <= (decoded.exp * 10000)) {
                return { token, currentUser };
            }
        }
    }

    return false;
}

const signIn = async (token) => {
    let obj = JSON.stringify(JwtDecode(token));

    await Promise.all([
        storage.setData('token', token),
        storage.setData('currentUser', obj)
    ]);
}

const signOut = async () => {
    await storage.remData('token');
    await storage.remData('currentUser');
}

export default {
    isSignedIn: isSignedIn,
    signIn: signIn,
    signOut: signOut
}
