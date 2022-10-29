import { AppComponent } from "./component.js";
import { TodoItemComponent } from "./components/todoItemComponent.js";

export class AppModule {
    static defineElements() {
        window.customElements.define("app-root", AppComponent);
        window.customElements.define("todo-item", TodoItemComponent);
    }
}