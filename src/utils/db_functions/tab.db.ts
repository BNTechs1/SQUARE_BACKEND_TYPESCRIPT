// import { Schema } from "mongoose";
import { Recipe } from "../../interfaces/menu.interface";
import inventoryModel from "../../model/inventory.model";
import TabModel from "../../model/tab.model";
import tablogModel from "../../model/tablog.model";
import { showMenu } from "./menu.db";
// import tabModel from "../../model/tab.model";
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
    const tab = await TabModel.find({ staus: "COMPLETED", type: "DINE_IN" });
    return tab;
  } catch (error) {
    // Handle error
    console.error("Error retrieving tab:", error);
    throw error;
  }
}

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

export async function fetchDataByDateAndCompany(startDate: Date, endDate: Date, companyName: string) {
  try {
    console.log("startDate.", startDate)
    console.log("endDate.", endDate)
    console.log("companyName.", companyName)
    // const tab = await TabModel.findOne({ tabId: tabId });
    const result = await TabModel.find({
      createdAt: {
        $gte: startDate, // Start date
        $lte: endDate,   // End date
      },
      companyName: companyName,  // Company name to filter
      status: "COMPLETED",
      type: "DELIVERY",
    });

    return result;
  } catch (error) {
    // Handle the error here, e.g., log it or return an error response.
    console.error("Error fetching data:", error);
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
            i.dailyvalue = i.dailyvalue - r.value;
            i.save()
          }
        });
      })
    }
  } catch (error) {
    // Handle error
    console.error("Error retrieving tab:", error);
    throw error;
  }
}
