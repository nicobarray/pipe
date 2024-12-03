import { assertEquals } from "@std/assert";
import { pipe } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(pipe(2).pipe(a => a + 3).end(), 5);
});
