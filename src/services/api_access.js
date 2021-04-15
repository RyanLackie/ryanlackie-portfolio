const apiHost = window.location.hostname;
console.log(apiHost);
const port = window.location.hostname.includes('localhost') ? ':8080' : ':80';
const apiRoot = apiHost + port;
console.log(apiRoot);

export function sendMessage(name, email, phoneNumber, message) {
    return myFetch(apiRoot + "/app/sendMessage", {
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
    }).catch((err) => {
        console.log(err);
        return err;
    });
}
