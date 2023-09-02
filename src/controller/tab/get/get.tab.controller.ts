import { Request, Response } from "express";
import TabModel from "../../../model/tab.model";
import {
  showTab,
  showDeletedTab
} from "../../../utils/db_functions/tab.db";
import tablogModel from "../../../model/tablog.model";
// import  user from "../../model/user"

export const getTab = async (req: Request, res: Response) => {
  const { tabId } = req.params
  const tab = await showTab(tabId);
  res.status(200).send(tab);
};

export const getTabs = async (req: Request, res: Response) => {
    const Alltabs = await TabModel.find();
    const tabs = Alltabs.filter((tab)=> tab.status != "DELETED" && tab.status != "COMPLETED" )
    res.status(200).send(tabs);
};

// export const getDeletedTabs = async (req: Request, res: Response) => {
//     const Alltabs = await tablogModel.find();
//     res.status(200).send(Alltabs);
// };


// export const getDeletedTab = async (req: Request, res: Response) => {
//   const { tabId } = req.params
//   const tab = await showDeletedTab(tabId);
//   res.status(200).send(tab);
// };
