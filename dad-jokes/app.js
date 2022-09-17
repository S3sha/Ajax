const url = 'https://icanhazdadjoke.com/';

const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

btn.addEventListener('click', () => {
  fetchDadJoke();
});

const fetchDadJoke = async () => {
  result.textContent = 'Loading ...';
  try {
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'User-Agent': 'learnig app',
      },
    });
    if (!response.ok) {
      throw new Error('there was an error');
    }
    const data = await response.json();

    result.textContent = data.joke;
  } catch {
    result.textContent = 'there was an error';
  }
};
fetchDadJoke();
