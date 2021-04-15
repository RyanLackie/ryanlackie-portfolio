const localApiRoot = "http://localhost:8080";
const stagingApiRoot = "http://ryanlackie-port-api-staging.herokuapp.com:80";
const productionApiRoot = "http://ryanlackie-portfolio-api.herokuapp.com:80";

let apiRoot = localApiRoot;
// console.log(process.env.HEROKU_DEPLOY);
// if (process.env.HEROKU_DEPLOY === 'true') {
//     apiRoot = window.location.hostname.includes('staging') ? stagingApiRoot : productionApiRoot;
// }


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
