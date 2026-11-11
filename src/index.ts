const REGIONAL_INDICATOR_A = 0x1f1e6;
const LETTER_A = 65;

/**
 * Converts a country code (ISO 3166-1 alpha-2) to its emoji flag representation.
 *
 * The input must be exactly two ASCII letters and is case insensitive. This
 * performs syntactic validation only: it does not verify that the code is an
 * assigned country.
 *
 * @param countryCode - Two-letter country code (e.g., "US", "GB", "MA")
 * @returns The emoji flag representation of the country code
 * @throws {TypeError} If the input is not a string
 * @throws {Error} If the input is not exactly two characters long
 * @throws {Error} If the input contains anything other than ASCII letters
 * @example
 * ```ts
 * countryFlags("MA") // returns "🇲🇦"
 * countryFlags("US") // returns "🇺🇸"
 * countryFlags("gb") // returns "🇬🇧"
 * ```
 */
export function countryFlags(countryCode: string): string {
  if (typeof countryCode !== "string") {
    throw new TypeError("Country code must be a string");
  }

  if (countryCode.length !== 2) {
    throw new Error("Country code must be exactly 2 characters long");
  }

  if (!/^[A-Za-z]{2}$/.test(countryCode)) {
    throw new Error("Country code must contain only ASCII letters (A-Z)");
  }

  return Array.from(countryCode.toUpperCase(), (letter) =>
    String.fromCodePoint(
      REGIONAL_INDICATOR_A + (letter.charCodeAt(0) - LETTER_A)
    )
  ).join("");
}
