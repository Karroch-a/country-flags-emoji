# Changelog

All notable changes to this project are documented in this file.

## 2.0.0

### Breaking

- `countryFlags` now rejects input that is not exactly two ASCII letters
  (`A-Z` / `a-z`) by throwing an `Error`. Previously, two-character input such
  as `"12"`, `"!!"`, or a single emoji returned meaningless
  regional-indicator characters.

### Fixed

- Input validation now matches the documented behavior.
- Added the missing `LICENSE` file referenced by `package.json`.
- CI no longer fails because of the missing `package-lock.json`; it now uses
  `npm ci` with dependency caching.

### Changed

- Added an `exports` map with a `types` condition for modern Node and bundlers.
- Added `sideEffects: false` so the package can be tree-shaken.
- Added `engines.node` (`>=18`).
- Updated CI to Node.js 18, 20, 22, and 24 with `actions/checkout@v4` and
  `actions/setup-node@v4`.
- Expanded the test suite and README.

## 1.0.3

- Updated repository URLs.

## 1.0.2

- Early public releases (1.0.0–1.0.2).
