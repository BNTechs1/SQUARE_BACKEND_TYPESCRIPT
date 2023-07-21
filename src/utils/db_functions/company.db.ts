import CompanyModel from "../../model/company.model";

export async function getAllCompany() {
    return await CompanyModel.find();
}

export async function showCompany(id: string) {
    return await CompanyModel.findOne({_id: id});
}

export async function showCompanybyEmail(email: string) {
    return await CompanyModel.findOne({email: email});
}