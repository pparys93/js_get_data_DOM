'use strict';

const populations = document.querySelectorAll('.population');
const numbers = Array.from(populations)
  .map((population) => parseInt(population.textContent.replace(/,/g, '')))
  .filter((num) => !Number.isNaN(num));

const averagePopulation =
  numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length;
const totalPopulation = numbers.reduce((acc, curr) => acc + curr, 0);

const averagePopulationElement = document.querySelector('.average-population');

averagePopulationElement.textContent = averagePopulation.toLocaleString();

const totalPopulationElement = document.querySelector('.total-population');

totalPopulationElement.textContent = totalPopulation.toLocaleString();
