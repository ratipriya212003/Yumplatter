var cust = ''

function saveFormData(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    

    cust = name;

    // Log a message to the console
    // console.log(`Thank you, ${name}, for your response!`);

    // Redirect to "../index.html"
    window.location.href = `../index.html?name=${encodeURIComponent(name)}`;
}
