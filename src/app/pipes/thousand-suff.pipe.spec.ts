import { ThousandSuffPipe } from "./thousand-suff.pipe";

describe("ThousandSuffPipe", () => {
  let pipe: ThousandSuffPipe;

  beforeEach(() => {
    pipe = new ThousandSuffPipe();
  });

  it("should return the same input if input < 1000", () => {
    const input = 900;
    expect(pipe.transform(input)).toEqual(input);
  });
});
