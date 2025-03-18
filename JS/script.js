document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    if (name && email && message) {
        document.getElementById("responseMessage").innerText = "Mensaje enviado correctamente!";
        document.getElementById("responseMessage").style.color = "green";
    } else {
        document.getElementById("responseMessage").innerText = "Por favor, completa todos los campos.";
        document.getElementById("responseMessage").style.color = "red";
    }
});
