import { countryFlags } from "./index";

describe("countryFlags", () => {
  describe("valid input", () => {
    it("should convert country codes to flag emojis", () => {
      expect(countryFlags("US")).toBe("🇺🇸");
      expect(countryFlags("GB")).toBe("🇬🇧");
      expect(countryFlags("MA")).toBe("🇲🇦");
      expect(countryFlags("ES")).toBe("🇪🇸");
    });

    it("should handle lowercase input", () => {
      expect(countryFlags("us")).toBe("🇺🇸");
      expect(countryFlags("gb")).toBe("🇬🇧");
      expect(countryFlags("ma")).toBe("🇲🇦");
    });

    it("should map every A-Z pair to two regional indicator symbols", () => {
      for (let first = 65; first <= 90; first++) {
        for (let second = 65; second <= 90; second++) {
          const code = String.fromCharCode(first, second);
          const points = Array.from(countryFlags(code), (char) =>
            char.codePointAt(0)!
          );

          expect(points).toHaveLength(2);
          expect(points[0]).toBe(0x1f1e6 + (first - 65));
          expect(points[1]).toBe(0x1f1e6 + (second - 65));
        }
      }
    });
  });

  describe("invalid input", () => {
    it("should throw when the code is not exactly 2 characters long", () => {
      expect(() => countryFlags("USA")).toThrow(
        "Country code must be exactly 2 characters long"
      );
      expect(() => countryFlags("U")).toThrow(
        "Country code must be exactly 2 characters long"
      );
      expect(() => countryFlags("")).toThrow(
        "Country code must be exactly 2 characters long"
      );
      expect(() => countryFlags("🇺🇸")).toThrow(
        "Country code must be exactly 2 characters long"
      );
    });

    it("should throw when the code contains non-letter characters", () => {
      const invalidCodes = ["12", "!!", "U1", " U", "éé", "😀"];

      for (const code of invalidCodes) {
        expect(() => countryFlags(code)).toThrow(
          "Country code must contain only ASCII letters (A-Z)"
        );
      }
    });

    it("should throw when the input is not a string", () => {
      // @ts-expect-error - Testing invalid type at runtime
      expect(() => countryFlags(123)).toThrow("Country code must be a string");
      // @ts-expect-error - Testing invalid type at runtime
      expect(() => countryFlags(null)).toThrow("Country code must be a string");
      // @ts-expect-error - Testing invalid type at runtime
      expect(() => countryFlags(undefined)).toThrow(
        "Country code must be a string"
      );
    });
  });
});
