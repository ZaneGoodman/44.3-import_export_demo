import { choice, remove } from "./helpers.js";
import fruits from "./foods.js";

const fruit = choice(fruits);
console.log(`I'd like one ${fruit}`, please);
console.log(`Here you go: ${fruit}`);
console.log(`Delicious! May I have another?`);
console.log(`Delicious! May I have another?`);
const remaining = remove(fruits, fruit);
console.log(`I'm sorry, we're all out. We have ${remaining.length} left`);
