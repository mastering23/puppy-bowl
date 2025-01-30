// console.log('TESTING');

// 2) Create state ✅

const state = {
  playersList:[],
  playerShowDetails:false,

};

// console.log(state.playerShowDetails); testing return false so that means i can use some if  statements !


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

   if(state.playerShowDetails){
   
    li.innerHTML = li.innerHTML = `Players: ${player.name} <hr>Details <br> Breed: ${player.breed} <br> Status: ${player.status} <br> Team ID: ${player.teamId} <br> <img src="${player.imageUrl}" alt="Player Image"> <br><br> <hr>`;
    ;
    ol.append(li);

   }else{
   
    li.innerHTML = `Player: ${player.name} <br> <hr> `; //  Breed: ${player.breed}, Status: ${player.status}
    // console.log(ol);
    ol.append(li);
   }

  });
};


//texting - Display player details ✅
const showDetailsSwitch = ()=>{

const elementTitle = document.querySelector("#main"); 
const elementSubTitle = document.querySelector('h2');
const elementBtn1 = document.querySelector('#btn1');

if(state.playerShowDetails){
  
  elementTitle.style.display ="block";
  elementSubTitle.innerText = "PLAYERS LIST";
  elementBtn1.innerHTML ="SHOW DETAILS 🦴";

}else{
  
  // elementTitle.style.display ="none";
  elementSubTitle.innerText= "PLAYERS | DETAILS ";
  elementBtn1.innerHTML ='GO BACK 🦴';

}

state.playerShowDetails = !state.playerShowDetails;
//- Get back to the roster from the details page✅

renderPlayersList();

};


getDataApi();