import rickMortyView from "../view/rickMortyView.js";
import rickMortyService from "../service/rickMortyService.js";

export async function init() {
    console.log("sdfghjkmbgt");
    const { results: character, next } = await rickMortyService.getCharacters();
    rickMortyView.render(character, next)
}