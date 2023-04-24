const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
  test("numbers are formatted to comma'd string", () => {
   expect(addCommas(12345)).toEqual("12,345")
  });
});
