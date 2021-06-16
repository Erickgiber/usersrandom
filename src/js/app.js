const exportData = () => {
getJSON_({
    url: "https://randomuser.me/api/",
    event: data => {
	// Variables globales!
    	let name = data.results["0"].name.first;
        let lastname = data.results["0"].name.last;
        let completename = name + " " + lastname;
        let photo = data.results["0"].picture.large;
    	// Vaciando Contenedor!
        s_('#root').innerHTML = "";
	// Crear Tarjeta!
        card_({
            container: "#root",
            content: `
		<img id="photo src="${photo}" alt="Photo" />
		<span id="title"> Name: </span>
		<span id="name"> ${completename} </span>`;
        })
    }
});
}; exportData();

s_('#newuser').addEventListener('click', ()=> exportData());
