import fetcher from "./fetcher";

export const auth = (
  mode: "signup" | "signing",
  body: { email: string; password: string }
) => {
  return fetcher(`/${mode}`, body);
};
