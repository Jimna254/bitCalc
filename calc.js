class Calculator {
  constructor() {
    this.inputField = document.getElementById("input");
    this.result = "";
    this.previousAnswer = null;
  }

  appendToInput(value) {
    this.inputField.value += value;
  }

  calculateResult() {
    try {
      const processedInput = this.preprocessInput(this.inputField.value);

      this.result = eval(processedInput);
      this.inputField.value = this.result;
      this.previousAnswer = this.result;
    } catch (error) {
      this.result = `Error: ${error.message}`;
      this.inputField.value = this.result;
    }
  }

  preprocessInput(input) {
    const tokens = input.match(/(\d+\.?\d*|\D)/g);
    const processedTokens = tokens.map((token) => {
      return isNaN(token) ? token : parseInt(token, 10).toString();
    });

    // Reconstruct the expression
    return processedTokens.join("");
  }

  clearInput() {
    this.inputField.value = "";
  }

  removeLast() {
    this.inputField.value = this.inputField.value.slice(0, -1);
  }

  returnAns() {
    if (this.previousAnswer != null) {
    }
    this.inputField.value = this.previousAnswer;
  }
}
const calculator = new Calculator();
