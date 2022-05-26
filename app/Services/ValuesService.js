import { ProxyState } from "../AppState.js";

class ValuesService {
  buyItem(title) {
    throw new Error("What up to the fireside.");
  }
  addMoney(change) {
    let money = ProxyState.money 
    money += change
  }
}

export const valuesService = new ValuesService();

