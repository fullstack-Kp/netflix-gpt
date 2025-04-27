export const validateData = (email, password, name) => {
  console.log("🚀 ~ validateData ~ password:", password);
  console.log("🚀 ~ validateData ~ email:", email);

  const isItValidEmail =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  console.log("🚀 ~ validateData ~ isItValidEmail:", isItValidEmail);
  const isItValidPassword =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );
  console.log("🚀 ~ validateData ~ isItValidPassword:", isItValidPassword);
  const isItValidName = /^[a-zA-Z ]{2,30}$/.test(name);

  if (!isItValidEmail) {
    return "Email is invalid";
  }
  if (!isItValidPassword) {
    return "Password is invalid";
  }

  if (!isItValidName) {
    return "Name is invalid";
  }

  return null;
};
