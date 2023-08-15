import { createTab } from "./create/create.tab.controller";
import { createOrder } from "./create/create.order.controller";
import { getTab, getDeletedTab, getTabs, getCompletedTabs, getDeletedTabs, } from "./get/get.tab.controller";
import { deleteTab } from "./delete/delete.tab.controller";
import { CompleteTab } from "./changestatus/complete.tab.controller";
export {
    createTab,
    createOrder,
    deleteTab,
    getTab, 
    getTabs, 
    getCompletedTabs, 
    getDeletedTabs, 
    getDeletedTab, 
    CompleteTab
};
