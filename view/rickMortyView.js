import router from "../router.js";
import routes from "../routes.js";
import rickMortyService from "../service/rickMortyService.js";
import { index } from "../service/rickMortyService.js";
export let singleId = 0;

function render(character, next) {
  const container = document.querySelector("#container");
  container.innerHTML = ''; //removes previous elements

  const begin = document.createElement('div');
  begin.innerText = 'Welcome to Rick and Morty';
  container.appendChild(begin);

  const list = document.createElement('div');
  list.classList.add('wrapper');

  console.log("abracadabraaaaaa");

  character.forEach(({ name, status, species, type, gender, location, image, id }) => {
    const item = document.createElement('div');
    item.innerHTML = ` 
     
      <div class="card text-white bg-secondary mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${image}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h1 class="card-title">${name}</h1>
              <p class="species">${species}-${status}</p>
              <p class="species">${gender}</p>
              <p class="species">${location.name}</p>
              <p class="species">${type}</p>
              <button id="info-${id}" class="btn btn-primary moreInfoBtn">More Info</button>
            </div>
          </div>
        </div>
      </div>

      `;

    console.log("shiuuuuuuu");
    list.appendChild(item);
  });

  container.appendChild(list);


//about pagination

  const pagination = document.createElement('div');
  pagination.classList.add('pagination-container');

  const prevButton = document.createElement('button');
  prevButton.innerText = '<';
  prevButton.addEventListener('click', async () => {
    if (rickMortyService.index == 1) {
      prevButton.disabled;
      console.log("cannot go back, 1st page")

    } else {
      const newIndex = rickMortyService.decrementIndex();
      const newList = await rickMortyService.getCharacters(newIndex);
      render(newList.results)
    }

  });
 
  
  const currButton = document.createElement('button');
  currButton.innerHTML = `${index}`;
  console.log(rickMortyService.index);

  const nextButton = document.createElement('button');
  nextButton.innerText = '>';
  nextButton.addEventListener('click', async () => {
    const newIndex = rickMortyService.incrementIndex();
    const newList = await rickMortyService.getCharacters(newIndex);
    render(newList.results)
  });

  pagination.appendChild(prevButton);
  pagination.appendChild(currButton);
  pagination.appendChild(nextButton);

  container.appendChild(pagination);


  const moreInfoButton = document.getElementsByClassName(`moreInfoBtn`); // Get specific button
    
    

    
    [...moreInfoButton].forEach(elem => {
        elem.addEventListener('click', (e) => {
            const target = e.target;
            if (target.classList.contains('moreInfoBtn')) {
                const idMatch = target.id.match(/info-(\d+)/);
                if (idMatch) {
                    const id = idMatch[1];
                    console.log(id)
                    singleId = id;
                    const dinamicPath = routes.singleCharacter.path;
                    router.navigate(dinamicPath);
                }
            }
        })
    })
};

export default { render };