'use strict';

import db from "./db.js"
import {selectID} from './utility.js'


let carappend = selectID('car-div')
let modalText = selectID('modalText')
console.log(modalText)

	button2.addEventListener("click", function () {
		document.querySelector("#modal-dialog").close();
	});

function appendCar(object, div){
    for(let i = 0; i < object.data.length; i++){
        let img = document.createElement("img");
        let divCon = document.createElement('div')
        let p = document.createElement('p')

        
        divCon.classList.add('divcon')
        img.classList.add('car-img')
        p.classList.add('car-p')
        p.innerText = `Modal: ${object.data[i].brand}
                    \n price: ${object.data[i].price}
                    \n image source: ${object.data[i].source}`

        divCon.addEventListener("click", function () {
            document.querySelector("#modal-dialog").showModal();

            modal(db, modalText, i)
        });


        
        img.src = object.data[i].src;
        divCon.appendChild(img);
        divCon.appendChild(p)
        div.appendChild(divCon)
    }
       
}
function modal(object, text, i){
    console.log(object.data[i].brand)
    text.innerText=`This is a ${object.data[i].brand}, which costs ${object.data[i].price} and has a zero to sixty of ${object.data[i].zeroToSixty} seconds. We have ${object.data[i].Inventory} in inventory`
}




appendCar(db, carappend)


console.log(selectID('car-div'))
console.log(carappend)