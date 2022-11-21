function inIT(){
console.log('Website loaded successfully!');
let request =  new XMLHttpRequest();
request.onreadystatechange = function() {
    console.log(`estado actual ${this.readyState}`);

    //comprueba el estado de la api, siendo 4 el valor para el estado de RECIBIDO, y de 200 OK en la extensión restful
    if (this.readyState == 4 && this.status == 200) {
        // usamos this para hacer referencia 
        //al objeto al que se refiere dentro de la función (this.readyState)
        // que sería igual que poner xhttp.readyState, solo que usamos this
        // para asegurarnos que nos referimos al objeto, ya que varios
        //programadores que trabajen en el mismo proyecto pueden darle nombres
        // diferentes a las variables

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
//Para autorización de coger datos, primer parámetro es el nombre del header, el segundo el token (value)
request.setRequestHeader("app-id", "63768da658fe3b011c6f1da1");
request.send();
}


function inIt(){
    console.log('Website loaded successfully!');
    let request =  new XMLHttpRequest();
    request.onreadystatechange = function() {
        console.log(`estado actual ${this.readyState}`);
    
        if (this.readyState == 4 && this.status == 200) {
    
            const productosDestacados = JSON.parse(this.responseText)
            let htmlContent = "<ul><li><span>Malaga</span></li></ul>";
    
            for (i = 0; i < productosDestacados.length; i++) {
            htmlContent += `<li>${productosDestacados[i].nombre}, 
            ${productosDestacados[i].stock}, 
            ${productosDestacados[i].precio}</li>`
            
            }
    
            let entriesDiv = document.getElementById('showEntries');
            entriesDiv.innerHTML= htmlContent;
            
        }
    }
    request.open("GET", "http://127.0.0.1:8000/productosdestacados", true);
  
    request.setRequestHeader("app-id", "63768da658fe3b011c6f1da1");
    request.send();
    }