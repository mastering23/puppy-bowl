
const state = {
  playersList: [],
  playerShowDetails: false,
};

const getDataApi = async () => {
  const res = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2501-FTB-ET-WEB-FT/players`);
  const response = await res.json(); 
  state.playersList = response.data.players;
  renderPlayersList();
};

const renderPlayersList = () => {

ol = document.querySelector("ol");
ol.innerHTML = "";

  state.playersList.forEach((player) => {

    const li = document.createElement("li");

    if (state.playerShowDetails) {

      li.innerHTML = li.innerHTML = `
    <legend><center> <strong><marquee>${player.name}🐾</marquee></strong></center></legend> <fieldset> Details<br>----------------<br>Breed: ${player.breed} <br> Status: ${player.status} <br> Team ID: 
    ${player.teamId} <br> Player ID:${player.id}<center> <img src="${player.imageUrl}" alt="Player Image"></center></fieldset> <br><br>`;

    ol.append(li);

    } else {
      
      li.innerHTML = `<strong>Player: ${player.name}</strong>`;
      
    li.style.cssText = `    
      font-size:0.6 rem;
      color:red;
      background-color: #f3f4f6;
      border: 2px solid #4CAF50;
      padding: 10px 15px;
      margin: 10px;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      font-family: 'Arial', sans-serif;   
      width: 300px;
      transition: background-color 0.3s, box-shadow 0.3s ease;
    `;
         ol.append(li);
    }
  });
};

const showDetailsSwitch = () => {

  const elementTitle = document.querySelector("#main");
  const elementSubTitle = document.querySelector("h2");
  const elementBtn1 = document.querySelector("#btn1");
  const elementOl = document.querySelector("ol");

  if (state.playerShowDetails) {

    elementTitle.style.display = "block";
    elementSubTitle.innerText = "PLAYERS LIST";
    elementBtn1.innerHTML = "SHOW DETAILS 🦴";
    elementOl.style.listStyle = "block";

  } else {

    elementSubTitle.innerText = "PLAYERS | DETAILS ";
    elementBtn1.innerHTML = "GO BACK 🦴";
    elementOl.style.listStyle = "none";

  }

  state.playerShowDetails = !state.playerShowDetails;

  renderPlayersList();
};

getDataApi();
