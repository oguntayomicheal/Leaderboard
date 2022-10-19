/* eslint-disable */

import _ from 'lodash';
import './style.css';

import addScore from "./modules/addScore.js";
import displayScore from "./modules/displayScore.js";


const formData = document.getElementById('form-data')
const refreshBtn = document.getElementById('refresh-btn')

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/rzhYg6cx8k9MVTokTDy0/scores/';

formData.addEventListener('submit', (e) => {
    e.preventDefault()
    addScore(url) 
})






