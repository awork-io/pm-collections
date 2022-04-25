import { Collection } from "../src";

test("Collection toJSON method", () => {
  const collection = new Collection({
    name: "New",
    description: "any",
    item: []
  });

  expect(JSON.stringify(collection.toJSON())).toStrictEqual(JSON.stringify({
    collection: {
      info: {
        schema: "https://schema.postman.com/json/collection/v2.1.0/collection.json",
        name: "New",
        description: "any",
      },
      item: []
    }
  }));
});
