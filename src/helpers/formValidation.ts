import * as Yup from "yup";

export const formValidation = Yup.object().shape({
  username: Yup.string().label("Username").min(2).required(),
  password: Yup.string().label("Password").min(2).required(),
});
