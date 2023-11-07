import { isImage, formatValue  } from "./valueTypes";

describe("isImage", () => {
  it("should return true if the url is an image", () => {
    const url = "https://www.test.com/image.jpg";
    const result = isImage(url);
    expect(result).toBe(true);
  });

  it("should return false if the url is not an image", () => {
    const url = "https://www.test.com/image.txt";
    const result = isImage(url);
    expect(result).toBe(false);
  });
});

describe("formatValue", () => {
    it("should return a formatted price", () => {
        const value = 1000;
        const key = "price";
        const result = formatValue(value, key);
        expect(result).toBe("£1,000");
    });
    
    it("should return a formatted mileage", () => {
        const value = 1000;
        const key = "mileage";
        const result = formatValue(value, key);
        expect(result).toBe("1,000 miles");
    });
    
    it("should return a formatted value", () => {
        const value = 1000;
        const key = "test";
        const result = formatValue(value, key);
        expect(result).toBe("1000");
    });
});