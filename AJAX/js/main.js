function inIT(){
console.log('Website loaded successfully!');
let request =  new XMLHttpRequest();
request.onreadystatechange = function() {
    console.log(`estado actual ${this.readyState}`);

    //comprueba el estado de la api, siendo 4 el valor para el estado de RECIBIDO, y de 200 OK en la extensión restful
    if (this.readyState == 4 && this.status == 200) {
        // usamos JSON.parse para transofrmar el texto a formato JSON, y lo metemos en la variable repsonse
        const response = JSON.parse(this.responseText)
        //creamos variable entries para meter el apartado entries (response.entries) del JSON, 
        //ya que los datos que hay en "https://api.publicapis.org/entries" son "count" y "entries". Description y Category están en entries.
        const entries = response.entries;
        let htmlContent = "<ul>";

        for (i = 0; i < entries.length; i++) {
        htmlContent += `<li>${entries[i].Description}, ${entries[i].Category}</li>`
        
        }

        //creamos entriesDiv (refiriéndonos al div del HTML que vamos a rellenar con la información) y en el paréntesis llamamos al div por su id.
        let entriesDiv = document.getElementById('showEntries');
        // igualamos la variable del div con .innerHTML para modifcar el div del HTML con la variable que hemos creado como contador "htmlContent, mostrando así "
        entriesDiv.innerHTML= htmlContent;
    }
}
request.open("GET", "https://api.publicapis.org/entries", true);
request.send();
}

