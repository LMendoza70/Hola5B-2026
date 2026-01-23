let latitud
let longitud

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(
        (coordenadas)=>{
            latitud=coordenadas.coords.latitude
            longitud=coordenadas.coords.longitude

            const coordenada=[latitud,longitud]
            let map = L.map('map').setView(coordenada, 16)

            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);

            let marcador=L.marker(coordenada).addTo(map)

            marcador.bindPopup("<b>Estoy aqui...</b><br>Mis coordenadas son : <br>"
                +"Latitud : "+latitud+ " ,<br> Longitud : "+longitud
            ).openPopup();

        },
        (error)=>{
            alert("si tiene geolocalizacion el navegador pero algo paso....")
        })
}else{
    alert("no tiene geolocalizacion el navegador")
}