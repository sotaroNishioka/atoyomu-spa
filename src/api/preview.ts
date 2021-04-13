//    import firebase from 'firebase';

export type ApiResponse = {
  description: string;
  images: string[];
  title: string;
  url: string;
};

export const getPreview = async (url: string) => {
  // const test = firebase.functions().httpsCallable('preview');
  // const foo = test();
  // console.log(foo);
  const response = await fetch(
    `https://atoyomu-api.herokuapp.com/preview?url=${url}`,
    {
      method: 'POST',
    }
  );
  const overview = (await response.json()) as ApiResponse;
  return overview;
};
