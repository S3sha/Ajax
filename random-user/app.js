import get from './utils/getElement.js';
import getUser from './utils/fetch-user.js';
import displayUser from './utils/display-user.js';

const btn = get('.btn');

const showUser = async () => {
  //get user from api
  const person = await getUser();

  // display user
  displayUser(person);
};

window.addEventListener('DOMContentLoaded', showUser);
btn.addEventListener('click', showUser);
