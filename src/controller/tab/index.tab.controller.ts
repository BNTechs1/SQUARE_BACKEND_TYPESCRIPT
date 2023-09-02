import { createTab } from "./create/create.tab.controller";
import { createOrder } from "./create/create.order.controller";
import { getTab, getTabs, } from "./get/get.tab.controller";
import { deleteTab } from "./delete/delete.tab.controller";

// filter for tabs and payments
import { getCompleted } from "./filters/completed.tab.controller"
import { getPaid } from "./filters/paid.delivery.controller"
import { getPending } from "./filters/pending.delivery.controller"



//status changes 
import { tocomplete } from "./changestatus/tocomplete.tab.controller"
import { toPaid } from "./changestatus/topaid.delivery.controller"
import { toPending } from "./changestatus/topending.delivery.controller"

export {

    //CRUD TAB
    createTab, // creating tab
    createOrder, // creating order
    deleteTab, // delete tab
    getTab,  // get ongoing single tabs
    getTabs, // get ongoing all tabs 


    //filter for tabs and payments 
    getCompleted,  // get completed tabs and payment
    getPaid,
    getPending,


    //status changes 
    tocomplete, // change status to completed tab 
    toPaid, //change status from completed(pendingd) delivery to paid
    toPending //chnage status from ongoing tab to completed or pending delivery
};
