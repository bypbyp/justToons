import router from "../router.js";
import simpsonsService from "../service/simpsonsService.js";
import { index } from "../service/simpsonsService.js";
export let singleId = 0;

function render(character, next) {
  const container = document.querySelector("#container");
  container.innerHTML = ''; //removes previous elements

  const begin = document.createElement('div');
  begin.innerText = 'Welcome to simpsons';
  container.appendChild(begin);

  const list = document.createElement('div');

  console.log("abracadabraaaaaa");

  character.forEach(({ id, name, normalized_name, gender }) => {
    const item = document.createElement('div');
    item.innerHTML = ` <div class="card" style="width: 18rem;">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text">${id}</p>
        <h5 class="card-title">${name}</h5>
        <p class="card-text">${normalized_name}</p>
        <p class="card-text">${gender}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
      </div>`;

    console.log("shiuuuuuuu");
    list.appendChild(item);
  });

  container.appendChild(list);
};

export default { render };