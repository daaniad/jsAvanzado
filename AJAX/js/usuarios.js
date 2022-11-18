function inIt(page) {
    console.log('Welcome');
    let request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        console.log(`estado actual ${this.readyState}`);
        if (this.readyState == 4 && this.status == 200) {
            const response = JSON.parse(this.responseText)
            const data= response.data;
            let htmlContent = "<ul>";

            for (i = 0; i < data.length; i++) {
                htmlContent += `<li> <a href="/user_details.html"><img src=${data[i].picture}></a> ${data[i].firstName} ${data[i].lastName}`
            }

            let usersDiv = document.getElementById("container")
            usersDiv.innerHTML = htmlContent;

            let pageNumber = "";
            for (i = 0; i < response.total/response.limit; i++) {
                pageNumber += `<li onclick="inIt(${i})" class="page-item"><a class="page-link" href="#">${i+1}</a></li>`
            }
            let buttonsDiv = document.getElementById("pagi");
            buttonsDiv.innerHTML = pageNumber
        }
    }
    request.open("GET" , `https://dummyapi.io/data/v1/user?limit=10&page=${page}`)
    request.setRequestHeader("app-id", "63768da658fe3b011c6f1da1");
    request.send();
}



// user_details

function userDetail() {
    console.log('Welcome');
    let request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        console.log(`estado actual ${this.readyState}`);
        if (this.readyState == 4 && this.status == 200) {
            const response = JSON.parse(this.responseText)
            let htmlContent = `${response.id} 
            ${response.id}
            ${response.id}
            ${response.id}
            ${response.id}
            ${response.id}
            ${response.id}`;


            let usersDiv = document.getElementById("container")
            usersDiv.innerHTML = htmlContent;
        }
    }
    request.open("GET" , `https://dummyapi.io/data/v1/user/60d0fe4f5311236168a109ca`)
    request.setRequestHeader("app-id", "63768da658fe3b011c6f1da1");
    request.send();
}

//https://dummyapi.io/data/v1/user/60d0fe4f5311236168a109ca