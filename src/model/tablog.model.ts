import { Schema, model } from "mongoose";
import {ITabLog} from "../interfaces/tablog.interfaces"
const tabLogSchema = new Schema<ITabLog>({
    tabId: {
        type: String,
      },
      type: {
        type: String,
      },
      deletedBy: {
        type: String,
      },
      reason: {
        type: String,
      },
     
});

export default model<ITabLog>("tabLog", tabLogSchema);
