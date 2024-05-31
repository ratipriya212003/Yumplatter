function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[[]]/g, "\\$&");
    const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// Get the name parameter from the URL
const nameFromURL = getParameterByName('name');

// Use the nameFromURL as needed
console.log(`Name from URL: ${nameFromURL}`);

if (nameFromURL) {
    const data = document.getElementById("data");
    data.innerHTML = `Thank you, ${nameFromURL}, for your response!`;
    data.style.color = "red";
}