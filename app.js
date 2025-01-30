// console.log('TESTING');

// 2) Create state ✅

const state ={

playersList: [],

}


// 1) Create a fetch ✅

const getDataApi = async () =>{
  const res = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2501-FTB-ET-WEB-FT/players`);
  const players = await res.json();
  // console.log(x);//testing
  state.playersList = players;
};

getDataApi();




