//Local Production
//const api_root = "http://localhost:81";

//Server Deployment
const api_root = "http://206.189.189.220:81";


export function sendMessage(name, email, phoneNumber, message) {
    return myFetch(api_root + "/app/sendMessage", {
        name, email, phoneNumber, message
    });
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function myFetch(url = ``, data = null) {
    let options = {
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, same-origin, *omit
    };
    if(data) {
        options = { 
            ...options,
            method:  "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        };
    }
    return fetch(url, options)
    .then(response => {
        return response.json()
    }); // parses response to JSON
}