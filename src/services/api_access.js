const api_root = "http://localhost:8080";


export function sendMessage(name, email, phoneNumber, message) {
    return myFetch(api_root + "/app/sendMessage", {
        name, email, phoneNumber, message
    });
}


function myFetch(url = ``, data = null) {
    let options = {
        cache: "no-cache",
        credentials: "same-origin",
    };
    if (data) {
        options = {
            ...options,
            method:  "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(data),
        };
    }
    return fetch(url, options)
    .then(response => {
        return response;
    });
}
