console.log("hi");

const load = key => {
  try {
    const erializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : localStorage.removeItem(key);
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};