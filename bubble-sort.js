// Create our input data
const unsortedInputArray = [3, 52, 89, 61, 49, 22, 37, 91, 87, 100, 1, 2];

// seed data in unsortedInputArray
for (let i = 0; i < unsortedInputArray; i++) {
  unsortedInputArray.push(Math.round(Math.random() * 2000));
}

// TODO: create bubble sort function
const bubbleSort = (array) => {
  let len = array.length;
  for (let i = 0; i<len; i++) {
    for (let j=0; j<len; j++) {
      if (array[j] > array[j+1]) {
        let temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
  }
  return array;
};

const sorted = bubbleSort(unsortedInputArray);
console.log('Post Sort:', sorted.join(' '));
console.log('DONE!');
