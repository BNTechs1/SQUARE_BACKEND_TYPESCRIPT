import TabModel from "../../model/tab.model";

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
    const tab = await TabModel.findOne({tabId: tabId});
    return tab;
  } catch (error) {
    // Handle error
    console.error("Error retrieving tab:", error);
    throw error;
  }
}

