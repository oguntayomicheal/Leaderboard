/* eslint-disable */
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/rzhYg6cx8k9MVTokTDy0/scores/';

const displayScore = async () => {
    const showData = document.getElementById('all-scores')
    const response = await fetch(url);
    const data = await response.json();
    const dataArray = data.result

    showData.innerHTML = ''

    dataArray.forEach((element) => {
        const list = document.createElement('li')
        list.className = 'list'
        list.innerText = `${element.user}: ${element.score}`
        showData.appendChild(list)
    })
}

export default displayScore;
