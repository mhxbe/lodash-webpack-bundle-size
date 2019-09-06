import _ from "lodash";
import get from "lodash/get";
import { subtract } from "lodash-es";
import { sum } from "lodash-es";

console.log("Map:", _.map([1, 2, 3], number => number * 2));

const person = { names: { first: "John", last: "Doe" } };
console.log("get:", get(person, 'names.first', 'Anon'));

console.log("Subtract:", subtract([a, b]));

console.log("Sum:", sum([a, b]));
