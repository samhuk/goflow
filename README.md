<h1 align="center">GoFlow</h1>
<p align="center">
  <em>Go-like Javascript error handling</em>
</p>

<p align="center">
  <a href="https://img.shields.io/badge/License-MIT-green.svg" target="_blank">
    <img src="https://img.shields.io/badge/License-MIT-green.svg" alt="license" />
  </a>
  <a href="https://badge.fury.io/js/goflow.svg" target="_blank">
    <img src="https://badge.fury.io/js/goflow.svg" alt="npm version" />
  </a>
</p>

## Overview

GoFlow improves your errors. GoFlow allows you to:
* Emit and handle errors in a flat, Go-like way, avoiding endless nested try-catch blocks and use of mutable `let` variables.
* Endlessly nest errors with inner errors to attach useful context.
* Print errors to console beautifully (see **Logging** section below).

## Usage

```typescript
import { createGFError, GFResult } from 'goflow'

const task = (path: string): GFResult<string> => {
  try {
    return [fs.readFileSync(path, { encoding: 'utf8' }), null]
  }
  catch (e: any) {
    return [undefined, createGFError({
      msg: c => `Could not read file at ${c.cyan(path)}.`,
      inner: e,
    })]
  }
}

const [taskResult, err] = task() // Go-like structure
if (err != null) {
  console.log(err.toLogString()) // Log error (including, recursively, any of it's inner errors)
  exit(1)
}

exit(0)
```

## Logging

Use `GFError.toLogString` to serialize a GoFlow error to a console-loggable string. A preview of this output for a relatively complex error:

![Logging Preview](./img/img1.png)

## Development

See [./contributing/development.md](./contributing/development.md)

---

If you found this package delightful, feel free to [buy me a coffee](https://www.buymeacoffee.com/samhuk) ✨
