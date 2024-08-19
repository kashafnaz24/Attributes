            //Atribute
let div = document.querySelector("div");
console.log(div);
//get Attributes
let att = div.getAttribute("class");
console.log(att);
//set Attributes
let paragraph = document.querySelector("p");
console.log(paragraph.setAttribute('class',"paragraph_One"));

//other example of get
const element = document.getElementById("myH1");
let text = element.getAttribute("class"); 
document.getElementById("demo").innerHTML = text;
