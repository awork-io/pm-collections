import { Event, Script } from "../src";

test("Script test", () => {
  const event = new Event({
    listen: "test",
    script: "console.log(\"hey\");"
  });
  expect(event.script).toStrictEqual(new Script({
    exec: "console.log(\"hey\");"
  }));
});
