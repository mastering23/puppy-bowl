// console.log('TESTING');

// 1) Create a fetch ✅

const getDataApi = async () =>{
  const res = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2501-FTB-ET-WEB-FT/players`);
  const x = await res.json();
  console.log(x);//testing
};

getDataApi();




