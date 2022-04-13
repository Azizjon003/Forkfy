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
    await models.loadRecipe(id);
    RetcipeView.render(models.state.recipe);
  } catch (error) {
    alert(error);
  }
};

['load', 'hashchange'].forEach(val =>
  window.addEventListener(val, showRetcipe)
);

let funct = function () {
  return new Promise(function (resolve) {
    setTimeout(() => {
      return resolve('ishlamadi');
    }, 5000);
  });
};

console.log(funct().then(res => console.log(res)));
