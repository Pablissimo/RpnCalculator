class RpnCalculator {
    calc(input: string) {
        var tokens = input.split(" ");

        if (tokens.length === 1)
            return input;

        if (tokens.length === 2)
            return "";

        var stack = new Array();
        for (var i = 0; i < tokens.length; i++) {
            if (this.isOperator(tokens[i])) {
                var op2 = stack.pop();
                var op1 = stack.pop();
                stack.push(this.evaluate(op1, op2, tokens[i]));
            }
            else {
                stack.push(Number(tokens[i]));
            }
        }

        return stack[0];
    }

    evaluate(op1: number, op2: number, operator: string): number {
        var result;
        switch (operator) {
            case "+":
                return op1 + op2;
            case "-":
                return op1 - op2;
            case "*":
                return op1 * op2;
            case "/":
                return op1 / op2;
        }
        return result;
    }

    isOperator(operator: string): boolean {
        var operators = "+-*/";
        return operators.indexOf(operator) != -1;
    }
}
