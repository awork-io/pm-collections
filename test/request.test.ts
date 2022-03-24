import { Request } from "../src";

test("Request creation", () => {
  const request = new Request({
    description: "any description",
    url: "new url",
  });
  expect(JSON.parse(JSON.stringify(request))).toStrictEqual({
    description: "any description",
    url: "new url",
  });
});
