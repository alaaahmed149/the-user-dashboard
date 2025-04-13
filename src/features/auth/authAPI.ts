export const fakeLogin = async (
  email: string,
  password: string
): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "alaa@gmail.com" && password === "password") {
        resolve("FAKE_JWT_TOKEN");
      } else {
        reject("Invalid Credentials.");
      }
    }, 1000);
  });
};
