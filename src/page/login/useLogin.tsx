import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { createUser, getUser, updateUser } from '../../domain/userSetting';
import { firebaseAuth } from '../../firebase/firebase';

const useLogin = () => {
  const googleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(firebaseAuth, provider);

    if (user === null) {
      // eslint-disable-next-line no-alert
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
