const exportData = () => {
getJSON_({
    url: "https://randomuser.me/api/",
    event: data => {
		// Variables globales!
    	let name = data.results["0"].name.first;
        let lastname = data.results["0"].name.last;
        let completename = name + " " + lastname;
        let photo = data.results["0"].picture.large;
    	 // Crear Tarjeta!
        s_('#root').innerHTML = "";
        card_({
            container: "#root",
            content: `
					<div id="photo" style="
						background-image: url(${photo});
						background-position: center;
						background-size: cover;">
					</div>
					
					<div id="title"> Name: </div>

					<span id="name"> ${completename} </span> 
				`
        })
    }
});
}; exportData();

s_('#newuser').addEventListener('click', ()=> exportData());