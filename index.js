/**
 * Appends an element to the end of an array. Do not use the push method.
 * @param {Array[*]} array - an array of any kind of elements.
 * @param {Array[*]} element - an element of any kind.
 * @returns {number} the new length of the array.
 */

function myPushFunction(array, element) {

  let newLength = array.length;
// this loop is an equivalent of the push method.
  for (let i = 0; i <= newLength; i++) {
    if (i === newLength) {
      array[i] = element
    }
  }
  return array.length;
}

/**
 * Removes the last element of the array and returns the removed element, or undefined if the array is empty. Do not use the pop method.
 * @param {Array[*]} array - an array of any kind of elements.
 * @returns {*} - the removed element
 */
function myPopFunction(array) {

  lastElement = array[array.length - 1];

  let removesLastElemnt = []
  for (let i = 0; i < array.length - 1; i++){
    removesLastElemnt[i] = array[i]
  }

   for (let i = 0; i < removesLastElemnt.length; i++) {
     array[i] = removesLastElemnt[i];
   }
  
  array.length = removesLastElemnt.length

return lastElement;
}

/**
 * Determines whether an array includes a specific value within its entries. Do not use the includes method.
 * @param {Array[*]} array - an array of any kind of elements.
 * @param {*} searchElement - an element of any type that you are searching for in the array.
 * @param {number} [startIdx] - an optional index from which to start searching.
 * @returns {boolean} returns true if the searchElement is found in the array and false if it is not.
 */
function myIncludesFunction(array, searchElement, startIdx) {

}

/**
 * Returns the first index in an array where a specified value is found. Do not use the indexOf method.
 * @param {Array[*]} array - an array of any kind of elements.
 * @param {*} searchElement - an element of any type that you are searching for in the array.
 * @param {number} [startIdx] - an optional index from which to start searching.
 * @returns {number} returns the index at which the searchElement is found, or -1 if it is not found.
 */
function myIndexOfFunction(array, searchElement, startIdx) {}

/**
 * Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified. Do not use the slice method.
 * @param {Array[*]} array - an array of any kind of elements.
 * @param {number} [startIdx] - an optional number representing the starting index of the extraction. The startIdx can be negative.
 * @param {number} [endIdx] - an optional number representing the ending index of the extraction (non-inclusive). The endIdx can be negative.
 * @returns {Array[*]} returns a new array containing the extracted elements.
 */
function mySliceFunction(array, startIdx, endIdx) {}

/**
 * Creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator. Do not use the join method.
 * @param {Array[*]} array - an array of any kind of elements
 * @param {string} [separator] - an optional string to separate each pair of adjacent elements of the array. If no separator is specific the default separator should be a comma (",")
 * @returns {string} returns the concatenated string.
 */
function myJoinFunction(array, separator) {}

/**
 * Reverses the elements in the given array, returning the array. The first array element becomes the last, and the last array element becomes the first. Mutates the original array. Do not use the reverse method.
 * @param {Array[*]} array - an array of any kind of elements
 * @returns {Array[*]} returns a new array with the elements reversed.
 */
function myReverseFunction(array) {}

/**
 * Adds an element to the front of the array. Do not use the unshift method.
 * @param {Array[*]} array - an array of any kind of elements.
 * @param {*} newElement - an element of any type to add to the front of the array.
 * @returns {number} returns the new length of the array.
 */
function myUnshiftFunction(array, newElement) {}

/**
 * Removes the first element of the array and returns the removed element, or undefined if the array is empty. Do not use the shift method.
 * @param {Array[*]} array - an array of any kind of elements.
 * @returns {*} - the removed element
 */
function myShiftFunction(array) {

  if (array.length === 0) return undefined;

  let fiirstElement = array[0];

  for (let i = 1; i < array.length; i++){
    array[i - 1] = array[i]
  }

  array.length = array.length - 1
  
  return fiirstElement

}

module.exports = {
  myPushFunction,
  myPopFunction,
  myIncludesFunction,
  myIndexOfFunction,
  mySliceFunction,
  myJoinFunction,
  myReverseFunction,
  myUnshiftFunction,
  myShiftFunction,
};
