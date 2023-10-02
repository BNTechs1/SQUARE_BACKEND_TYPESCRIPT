import { create } from "./create.inventoroy.controller";
import {
  getinventories,
  getinventory,
  getPurchases,
} from "./get.inventory.controller";
import { update } from "./update.inventory.controller";
// import { deleteInventory } from "./delete.inventory.controller";
import { stack } from "./stack.inventory.controller";
import {filterStack} from './filters.inventory.controller'
import { allocateDailyValue } from "./setDaily.inventory.controller"
export {
  create,
  getinventories,
  getinventory,
  getPurchases,
  update,
  // deleteInventory,
  allocateDailyValue,
  stack,
  filterStack
};
