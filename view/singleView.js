import router from "../router";
import routes from "../routes";


function render(character){
    const container = document.querySelector("#container");
    const buttonContainer = document.querySelector("#button-container");
    
    container.innerHTML= '';

    const item = document.createElement('div');
    item.id = "personalCard";
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
            </div>
          </div>
        </div>
      </div>
      `;
    
    container.appendChild(item);
}

export default{ render };