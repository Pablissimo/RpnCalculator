
class ShuntingYard {

    result: string = "";
    appendToken(token: string) {
        if (this.result !== "") {
            this.result += " ";
        }
        this.result += token;
    }

    isOperator(operator: string) : boolean {
        return "+*-/".indexOf(operator) != -1;
    }

    precedence = {
        "*": 10,
        "+": 5
    };

    isHigherPrecedence(op1: string, op2: string) {
        return this.precedence[op1] > this.precedence[op2];
    }

    transform(input: string): string {
        var tokens = input.split(" ");
        this.result = "";

        var operators: Array<string> = [];
        for (var i = 0; i < tokens.length; i++) {
            if (!this.isOperator(tokens[i]))
                this.appendToken(tokens[i]);
            else {
                while (this.isHigherPrecedence(operators[operators.length - 1], tokens[i]))
                    this.appendToken(operators.pop());
                operators.push(tokens[i]);
            }
        }

        while (operators.length > 0)
        {
            this.appendToken(operators.pop());
        }
        return this.result;
    }
}