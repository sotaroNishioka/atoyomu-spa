export type ApiResponse = {
  description: string;
  images: string[];
  title: string;
  url: string;
};

export const getPreview = async (url: string) => {
  const response = await fetch(
    `https://atoyomi-api.herokuapp.com/preview?url=${url}`,
    {
      method: 'POST',
    }
  );
  const overview = (await response.json()) as ApiResponse;
  return overview;
};
