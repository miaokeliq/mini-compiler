describe("compiler", () => {
  it("Tokenizer should turn input string into tokens array'", () => {
    const tokenizer = require("../compiler");
    const input = "(add 2 (subtract 4 2))";
    let output = tokenizer(input);
    const tokens = [
      { type: "paren", value: "(" },
      { type: "name", value: "add" },
      { type: "number", value: "2" },
      { type: "paren", value: "(" },
      { type: "name", value: "subtract" },
      { type: "number", value: "4" },
      { type: "number", value: "2" },
      { type: "paren", value: ")" },
      { type: "paren", value: ")" },
    ];

    expect(output).toEqual(tokens);
  });
});
