import { API_BASE_URL } from "../app-config";

export function call(api, method, request, token){
    let options = {
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        }),
        url: API_BASE_URL + api,
        method: method,
    };
    if(request){
        options.body = JSON.stringify(request);
    }
    return fetch(options.url, options)
    .then((response) => response.json()
    .then((json) => {
        if(!response.ok){
            return Promise.reject(json);
        }
        return json
    })
    );
}
