const getRandomInteger = (max, min = 0) => Math.floor(Math.random() * (max - min)) + min;

export default getRandomInteger;
