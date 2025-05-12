import { createSchema } from "sanity";
import { schemaTypes } from "../schemaTypes"; 
import testimonials from "./testimonials";

export default createSchema({
  name: "default",
  types: schemaTypes,
});