import { ajax } from 'nanoajax';
const baseurl = 'http://localhost:3030/todos';

export default function apiCall(method, endpoint, params, cb) {
    let body;
    if (params) {
        body = Object.keys(params).map(p => encodeURIComponent(p) + "=" + encodeURIComponent(params[p])).join("&");

    }
    ajax({ url: baseurl + endpoint, method: method, body: body }, (code, tText) => {
        try {
            if ((code >= 200) && (code < 300) && (cb)) {
                return cb(JSON.parse(tText));
            }
        } catch (e) {
            console.log(e);
        }
    });
}