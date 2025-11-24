console.log("Opener Check is running")

var openingElement;

window.customElements.whenDefined("my-opener").then( function() {

    openingElement = document.getElementById("opener");
    setupOpenerDisplay();



    document.getElementById("VisitorForm").addEventListener("submit", function(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        fetch(event.target.action, {
            method:event.target.method,
            body:formData
        }).then( response => response.json())
        .then( data => { 
            console.log("Success", data);
            registerVisitor(false);
            openingElement.style.display = "none";
        })
           
    })

    document.getElementById("SubmitAnon").addEventListener('click', function(event) {
        event.preventDefault();
        registerVisitor(true);
        openingElement.style.display = "none";
        
    });

})



sessionStorage.clear();

function setupOpenerDisplay() {
    if (sessionStorage.getItem("visitorName") == null) {
    openingElement.style.display = "block";
    } else {
    openingElement.style.display = "none";
    }
}




function registerVisitor( anonCheck ) {
    if (!anonCheck) {
        console.log(document.getElementById("visitorName").value);
        sessionStorage.setItem("visitorName", document.getElementById("visitorName").value);
        sessionStorage.setItem("visitorCompany", document.getElementById("visitorCompany").value);
        } else {
            sessionStorage.setItem("visitorName", "anon");
            sessionStorage.setItem("visitorCompany", "anon");
        }
    
}


