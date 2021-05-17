const initialState = {
  name: "Soerjo",
  email: "soerjo@gmail.com",
  status: "Active",
};

function spreading(state = initialState) {
  return {
    ...state,
    name: "Soerjo Hastomo",
  };
}

console.log("isi state: ", spreading());
