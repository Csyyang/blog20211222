import request from "../util/axios"


export function addGuestbook(data = {}) {
    return request.post('/guestbooks/setGuestbook', data)
}
