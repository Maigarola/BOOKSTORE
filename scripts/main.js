// table PAGE

// Create the general table with general information
let url = "https://api.myjson.com/bins/zyv02";

fetch(url, {
}).then(function (response) {
    if (response.ok) {
        return response.json();
    }
    throw new Error(response.statusText);

}).then(function (json) {

    data = json;
    console.log(data);
    

}).catch(function (error) {
    console.log("Request failed: " + error.message);
});
