import fetchJsonp from 'fetch-jsonp';

const petForm = document.querySelector('#pet-form');

petForm.addEventListener('submit', fetchAnimals);

// fetch Animals 