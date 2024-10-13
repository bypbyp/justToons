import simpsonsView from "../view/simpsonsView.js";
import simpsonsService from "../service/simpsonsService.js";

export async function init() {
    console.log("sdfghjkmbgt");
    const { results: character, next } = await simpsonsService.getCharacters();
    simpsonsView.render(character, next)
}