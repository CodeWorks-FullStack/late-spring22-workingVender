import { ValuesController } from "./Controllers/ValuesController";

class App {
  valueController = new ValuesController();
}

window["app"] = new App();
