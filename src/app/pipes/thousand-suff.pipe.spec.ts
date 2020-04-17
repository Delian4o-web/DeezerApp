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

  it("should return thousand value in specific format", () => {
    const input = 12500;

    expect(pipe.transform(input)).toEqual("13k");
  });

  it("should return 100 thousand value in specific format", () => {
    const input = 164680;

    expect(pipe.transform(input)).toEqual("165k");
  });

  it("should return million value in specific format", () => {
    const input = 3091095;

    expect(pipe.transform(input)).toEqual("3M");
  });
});
