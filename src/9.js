const getRandomNodeJsCode = () => {
  // Create an array of possible characters to use in the code
  const chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  
  // Create an array of possible numbers to use in the code
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  // Combine the arrays into a single array of possible characters and numbers
  const allChars = chars.concat(nums);
  
  // Shuffle the array to create a random order
  let shuffledArray = allChars.shuffle();
  
  // Return the first 10 elements of the shuffled array as the generated code
  return shuffledArray.slice(0, 10);
}
