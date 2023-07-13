import UserModel from "../../model/user";

export async function getAllUsers() {
    return await UserModel.find().select('-password')
}

export async function showUsers(id: string) {
    return await UserModel.findOne({_id: id}).select('-password')
}