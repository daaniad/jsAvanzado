function inIt() {
    console.log('Welcome');
    let request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        console.log(`estado actual ${this.readyState}`);
        if (this.readyState == 4 && this.status == 200) {
            const response = JSON.parse(this.responseText)
            const entries= response.entries;
            let htmlContent = "<ul>";

            for (i = 0; i < entries.length; i++) {
                htmlContent += `<li>`
            }

            let usersDiv = document.getElementById("container")
            usersDiv.innerHTML = htmlContent;
        }
    }
    request.open("GET" , )
    request.send();
}