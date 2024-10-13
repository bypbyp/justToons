export let index = 1;
/*
async function fetchData() {
    const api = `https://api.sampleapis.com/simpsons/characters?page=${index}`;
    const response = await fetch(api);
    const body = await response.json();
    if (!response.ok || body.Response === "False") {
        throw new Error(body.Error);
    }

    // Check if body.info is defined and has a next property
    let nextPage = null;
    if (body.info && body.info.next) {
        nextPage = body.info.next;
    }

    return { results: body.results, next: nextPage };
}*/


async function fetchData() {

    const api = `https://api.sampleapis.com/simpsons/characters?page=${index}`;
    const response = await fetch(api);
    const body = await response.json();
    if (!response.ok || body.Response === "False") {
        throw new Error(body.Error);
    }
    
    return { results: body.results, next: body.info.next };
}

async function getCharacter(id) {
    try{
       const character = await fetchData();
       const number = subtractForIndex(id);
    return character.results[number];
    }catch{
      console.error("error fetching character", error);
      throw error;
    }
   
  }



async function getCharacters() {
    return await fetchData();
}

function incrementIndex() {
    index++;
}
function decrementIndex() {
    index--;
}

function subtractForIndex(number) {
    if (index === 1) {
        return number;
    }
    let subtractionValue = 20 * (index - 1);
    return number - subtractionValue;
}
export default { getCharacter, getCharacters, incrementIndex, decrementIndex };