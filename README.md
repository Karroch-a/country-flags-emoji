# Country Flags Emoji

Convert ISO 3166-1 alpha-2 country codes to flag emojis. Tiny, zero
dependencies, TypeScript-first.

[![npm version](https://img.shields.io/npm/v/@karroch/country-flags-emoji.svg)](https://www.npmjs.com/package/@karroch/country-flags-emoji)
[![npm downloads](https://img.shields.io/npm/dm/@karroch/country-flags-emoji.svg)](https://www.npmjs.com/package/@karroch/country-flags-emoji)
[![CI](https://github.com/Karroch-a/country-flags-emoji/actions/workflows/ci.yml/badge.svg)](https://github.com/Karroch-a/country-flags-emoji/actions/workflows/ci.yml)
[![license](https://img.shields.io/npm/l/@karroch/country-flags-emoji.svg)](./LICENSE)

## Installation

```bash
npm install @karroch/country-flags-emoji
```

## Usage

### ESM / TypeScript

```typescript
import { countryFlags } from "@karroch/country-flags-emoji";

countryFlags("US"); // 🇺🇸
countryFlags("MA"); // 🇲🇦
countryFlags("gb"); // 🇬🇧
```

### CommonJS

```javascript
const { countryFlags } = require("@karroch/country-flags-emoji");

countryFlags("ES"); // 🇪🇸
```

## API

### `countryFlags(countryCode: string): string`

Converts a two-letter country code to its corresponding emoji flag.

- **`countryCode`** — exactly two ASCII letters (`A-Z` / `a-z`), case
  insensitive.
- **Returns** — the flag emoji as a string.
- **Throws**
  - `TypeError` when the input is not a string.
  - `Error` when the input is not exactly two characters long.
  - `Error` when the input contains anything other than ASCII letters.

```typescript
countryFlags("FR"); // 🇫🇷
countryFlags("fr"); // 🇫🇷
```

> **Note:** validation is syntactic only. The function does not check that the
> code is an assigned country, so `countryFlags("XX")` returns 🇽🇽. If you need
> membership checks, validate the code against your own ISO 3166-1 list first.

> **Rendering caveat:** flag emojis are rendered by the operating system, not
> by this package. Windows typically shows the two regional-indicator letters
> (e.g. `US`) instead of a flag.

## Features

- Zero runtime dependencies
- TypeScript types included
- Case insensitive
- Rejects malformed input instead of returning garbage
- CommonJS and ESM-friendly (`exports` map, `sideEffects: false`)
- Works in Node.js (>= 18) and with frontend bundlers

## Migrating from 1.x

`2.0.0` makes validation strict: input that is not exactly two ASCII letters
now throws. In `1.x`, values such as `"12"`, `"!!"`, or a single emoji were
accepted and produced meaningless regional-indicator characters. If you relied
on that behavior, pin `1.0.3` or sanitize input before calling `countryFlags`.

## Development

```bash
npm install
npm test
npm run build
```

## License

MIT © [Abdellah Azeroual](https://github.com/Karroch-a)
