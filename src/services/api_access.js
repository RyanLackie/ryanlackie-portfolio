// Change non localhost to https if server get's setup
const protocol = window.location.hostname === 'localhost' ? 'http://' : 'http://';
const apiHost = protocol+window.location.hostname;
const port = apiHost.includes('localhost') ? ':8000' : ':80';
const apiRoot = apiHost + port;

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
