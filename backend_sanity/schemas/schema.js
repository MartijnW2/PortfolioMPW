import { createSchema } from "sanity";
import { schemaTypes } from "../schemaTypes"; 

export default createSchema({
  name: "default",
  types: schemaTypes,
});