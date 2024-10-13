import router from "../router.js";


function render(){
    const container = document.querySelector("#container");
    container.innerHTML = ''; //removes previous elements

    const begin = document.createElement('div');
    begin.innerText = 'home';
    container.appendChild(begin);
};

export default {render};