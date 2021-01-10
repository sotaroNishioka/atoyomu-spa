import { createUser, getUser, updateUser } from '../../domain/userSetting';
import firebase from '../../firebase/firebase';

const useLogin = () => {
  const googleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await firebase.auth().signInWithPopup(provider);

    if (user === null) {
      alert('ログインに失敗しました');
      return;
    }

    const exsitUser = await getUser(user);
    if (exsitUser === undefined) {
      await createUser(user);
    }
    await updateUser(user.uid);
  };
  return { func: { googleLogin } };
};

export default useLogin;
