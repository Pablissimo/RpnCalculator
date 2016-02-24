var greeter;


class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    input: HTMLInputElement;
    result: HTMLElement;
    calculate: HTMLButtonElement;
    timerToken: number;
    ss: Greeter;

    constructor(element: HTMLElement) {
        if (!element)
            return;
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.input = document.createElement('input');
        this.result = document.createElement('div');
        this.calculate = document.createElement('button');
        this.element.appendChild(this.span);
        this.element.appendChild(document.createElement("br"));
        this.element.appendChild(this.input);
        this.element.appendChild(this.result);
        this.element.appendChild(this.calculate);
        this.span.innerText = new Date().toUTCString();

        this.input.innerText = "1 2 +";
        this.result.innerText = "3";
        this.calculate.innerText = "Calculate";
        this.calculate.onclick = function () {
            var calculator = new RpnCalculator();
            greeter.result.innerText = calculator.calc(greeter.input.value);
        }
    }

    start() {
        if (!this.element)
            return;
        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
    }

    stop() {
        clearTimeout(this.timerToken);
    }

}

window.onload = () => {
    var el = document.getElementById('content');
    greeter = new Greeter(el);
    greeter.start();
};