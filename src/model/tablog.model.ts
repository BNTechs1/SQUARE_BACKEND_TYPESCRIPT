import { Schema, model } from "mongoose";

const tabLogSchema = new Schema({
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

export default model("tabLog", tabLogSchema);
