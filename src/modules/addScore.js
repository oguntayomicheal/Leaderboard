/* eslint-disable */
const addScore = async (url) => {
  let name = document.getElementById('name');
  let score = document.getElementById('score');

  await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
    user: name.value,
    score: score.value,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  name.value = ''
  score.value = ''
}

export default  addScore;