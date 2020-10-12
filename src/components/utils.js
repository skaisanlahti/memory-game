/* === Utility functions ===
============================================================================= */

// Fisher–Yates Shuffle: https://bost.ocks.org/mike/shuffle/
const suffleArray = (array) => {
  let element = array.length;
  let temp;
  let index;

  // While there remain elements to shuffle…
  while (element) {
    // Pick a remaining element…
    index = Math.floor(Math.random() * element--);

    // And swap it with the current element.
    temp = array[element];
    array[element] = array[index];
    array[index] = temp;
  }

  return array;
};

export { suffleArray };
