import { ProxyState } from "../AppState.js";
import valuesService from "../Services/ValuesService.js";


//Private
function _draw() {
  let itemTemplate = ''
  document.getElementById("money").innerText = ProxyState.money.toString()
  ProxyState.items.forEach(i => itemTemplate = i.Template)
  document.getElementById('app').innerHTML = itemTemplate
}
function buyItem(title) {
  valuesService.buyItem(title)
}

//Public
export class ValuesController {
  constructor() {
    ProxyState.on("itemsOwned", _draw);
    ProxyState.on("item", _draw);
    ProxyState.on(money, _draw);
    _draw()
  }

  addMoney(moneyAdded) {
    valuesService.addMoney(moneyAdded)
  }


}
