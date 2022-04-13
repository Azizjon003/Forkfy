import { APi_URL } from './config';
import { getJson } from './help';
export const state = {
  recipe: {},
};
export const loadRecipe = async function (id) {
  try {
    const dataJSon = await getJson(APi_URL + id);
    const obj = dataJSon.data.recipe;
    state.recipe = {
      id: obj.id,
      image: obj.image_url,
      publisher: obj.publisher,
      ingridient: obj.ingredients,
      servings: obj.servings,
      url: obj.source_url,
      title: obj.title,
      time: obj.cooking_time,
    };
    console.log(state.recipe);
  } catch (erorr) {
    alert(erorr);
  }
};
