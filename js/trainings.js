// console.log("hi there");

// const load = key => {
//   try {
//     const erializedState = localStorage.getItem(key);
//     return serializedState === null ? undefined : localStorage.removeItem(key);
//   } catch (error) {
//     console.error("Get state error: ", error.message);
//   }
// };

// codewars: validate Pin code

function validatePIN(str) {
  if (str.length !== 4 && str.length !== 6) {
    return false;
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] < '0' || str[i] > '9') {
      return false;
    }
  }
  return true;
}

validatePIN('5768yo');