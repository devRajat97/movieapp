export const Validation = ( email, password) => {
  const isValidEmail = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,6}$/.test(
    email
  );
  const isValidPassword =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );
  if (!isValidEmail) return "*Email is not Valid";
  if (!isValidPassword) return "*Password is not valid";

  return null;
};
