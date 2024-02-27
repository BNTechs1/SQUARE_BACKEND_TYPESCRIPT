import { registerUser } from "./register.auth.controller";
import { getUsers, getuser } from "./get.auth.controller";
import { login } from "./login.auth.controller";
import { resetPassword } from "./resetPassword.auth.controller";
import { changePassword } from "./changepassword.controller";
import {deleteUser} from "./user.delete.controller"


export { registerUser, getuser, getUsers, login, resetPassword, changePassword, deleteUser};
