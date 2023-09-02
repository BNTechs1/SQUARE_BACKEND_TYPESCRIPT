import { Schema } from "mongoose";
import { Recipe } from "../../interfaces/menu.interface";
import inventoryModel from "../../model/inventory.model";
import TabModel from "../../model/tab.model";
import tablogModel from "../../model/tablog.model";
import { showMenu } from "./menu.db";

export async function getAllTab() {
  try {
    const tab = await TabModel.find();
    return tab;
  } catch (error) {
    // Handle error
    console.error("Error retrieving tab:", error);
    throw error;
  }
}
export async function showTab(tabId: string) {
  try {
    const tab = await TabModel.findOne({ tabId: tabId });
    return tab;
  } catch (error) {
    // Handle error
    console.error("Error retrieving tab:", error);
    throw error;
  }
}

export async function showCompletedandDineIN() {
  try {
    const tab = await TabModel.find({ staus: "COMPLETED", type: "DINE_IN"});
    return tab;
  } catch (error) {
    // Handle error
    console.error("Error retrieving tab:", error);
    throw error;
  }
}
// export async function GOOGLE(Model: Schema , Q : any) {
//   try {
//     return await Model.find(Q);
//   } catch (error) 
//     // Handle error
//     console.error("Error retrieving :", error);
//     throw error;
//   }
// }

export async function showDeletedTab(tabId: string) {
  try {
    const tab = await tablogModel.findOne({ tabId: tabId });
    return tab;
  } catch (error) {
    // Handle error
    console.error("Error retrieving tab:", error);
    throw error;
  }
}

export async function decrementRecipe(menuId: string) {
  try {

    const menu = await showMenu(menuId);

    if (menu) {
      const recipearray = menu.recipe as Recipe[];
      const Items = await inventoryModel.find();
      recipearray.map((r) => {
        Items.filter((i) => {
          if (r.name === i.name) {
            i.value = i.value - r.value;
            i.save()
          }
        });
      })


      // Items.map((item) => {
      //   recipearray.find((recipeobject) => {
      //     if (recipeobject.name === item.name) {
      //       item.value = item.value - recipeobject.value;
      //       Items.filter((i) => {
      //         if (i.name === item.name) {
      //           i.value = item.value;
      //         }
      //       });
      //     }
      //   });
      //   item.save()
      // });
    }
  } catch (error) {
    // Handle error
    console.error("Error retrieving tab:", error);
    throw error;
  }
}


export async function incrementRecipe() {

}