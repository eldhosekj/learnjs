//import
import{capitalizeString} from "./string_function"
const cap =capitalizeString("hello");
console.log(cap);
\\export
const capitalizeString=(string)=>{
    return string.charAt(0) + string.slice(1);
}
export{capitalizeString};
export const foo="bar"
export const bar="foo"