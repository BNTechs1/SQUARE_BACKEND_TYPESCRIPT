import EmployeeModel from "../../model/employee.model";

export async function getAllEmployees() {
    return await EmployeeModel.find();
}

export async function showEmployee(id: string) {
    return await EmployeeModel.findOne({_id: id});
}