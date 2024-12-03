class Pipe<T> {
  constructor(private value: T) {}
  pipe<U>(fn: (_: T) => U): Pipe<U> {
    return new Pipe(fn(this.value))
  }
  end(): T {
    return this.value
  }
}

export function pipe<T>(value: T): Pipe<T> {
  return new Pipe(value)
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("Add 2 + 3 =", pipe(2).pipe(a => a+3).end());
}
