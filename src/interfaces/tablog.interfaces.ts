import { Document } from "mongoose"
export interface ITabLog extends Document{
    tabId: string,
    type: string,
    deletedBy: string,
    reason: string
}
