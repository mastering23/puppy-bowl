// console.log('TESTING');

// 2) Create state ✅

const state = {
  playersList:[],
  PlayerDetails:[],

};

// 1) Create a fetch ✅

const getDataApi = async () => {
  const res = await fetch(
    `https://fsa-puppy-bowl.herokuapp.com/api/2501-FTB-ET-WEB-FT/players`
  );
  const response = await res.json();
  console.log(response); //testing
  state.playersList = response.data.players;

  renderPlayersList();

};


//- 3) Create a display -> Render function✅

const renderPlayersList = () => {

  ol = document.querySelector("ol");

  ol.innerHTML = '';

  state.playersList.forEach((player) => {

    const li =document.createElement("li");
    li.innerHTML = `Players: ${player.name}, `; //  Breed: ${player.breed}, Status: ${player.status}
    // console.log(ol);
    ol.append(li);

  });
};


//texting 
const showAndHiddeNodes = ()=>{
//title h1
const elementTitle = document.querySelector("#main"); 
elementTitle.style.display = "none";
//h2 players list  to players list | details
const elementSubTitle = document.querySelector('h2');
elementSubTitle.innerText =`Players list | details`; 
//hiding button
const elementBtn1 = document.querySelector('btn1');
elementBtn1.style.display = "block";

renderPlayersList2();

};

// testing  the previews render and show the second 2 i might refactory just to test my logic work 
const renderPlayersList2 = () => {

  ol = document.querySelector("ol");

  ol.innerHTML = '';
  il.innerHTML= "";

  state.playersList.forEach((player) => {

    const li =document.createElement("li");
    li.innerHTML = `Players: ${player.name}, Breed: ${player.breed}, Status: ${player.status}`; //  
    // console.log(ol);
    ol.append(li);

  });
};

getDataApi();