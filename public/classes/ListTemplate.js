export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, pos) {
        const li = document.createElement("li");
        const p = document.createElement("p");
        const h4 = document.createElement("h4");
        p.innerText = item.format();
        h4.innerText = heading;
        li.append(h4);
        li.append(p);
        if (pos === "start") {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
