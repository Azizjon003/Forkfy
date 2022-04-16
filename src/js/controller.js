const { async } = require('regenerator-runtime');
import { Promise } from 'core-js';
import * as models from './model';
import RetcipeView from './views/recipView';
// import icons from 'url:../img/icons.svg';
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};
// https://forkify-api.herokuapp.com/v2
const showRetcipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    RetcipeView.spinner();
    await Promise.race([models.loadRecipe(id), timeout(5)]);
    RetcipeView.render(models.state.recipe);
  } catch (error) {
    alert(error);
  }
};

['load', 'hashchange'].forEach(val =>
  window.addEventListener(val, showRetcipe)
);
