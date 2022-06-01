'use strict';


import db from "./db.js"
import {select, selectAll} from './utility.js'

console.log(select)
const h = select('.title1');
console.log(h)

h.innerText = "module"
