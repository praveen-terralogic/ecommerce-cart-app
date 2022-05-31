import initialState from "./initialState.json";

export const loadState = () => {
  try {
    let serializedState = localStorage.getItem("state");
    // console.log(serializedState);
    if (!serializedState) {
      const initialData = JSON.stringify({ ...initialState });
      localStorage.setItem("state", initialData);
      serializedState = localStorage.getItem("state");
      // console.log(serializedState);
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (err) {
    // Ignore write errors.
  }
};
