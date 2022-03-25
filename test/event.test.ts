import { Event } from "../src";

test("Event creation", () => {
  const request = new Event({
    listen: "test",
    script: "script",
  });
  expect(JSON.parse(JSON.stringify(request))).toStrictEqual({
    listen: "test",
    script: "script",
  });
});
