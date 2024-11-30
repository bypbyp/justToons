import singleView from "../view/singleView";
import rickMortyService from "../service/rickMortyService";
import { singleId } from "../view/rickMortyView";

export async function init(){
    console.log("ta no singleeee");
    const character = await rickMortyService.getCharacter(singleId -1);
    singleView.render(character)
}