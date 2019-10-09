const remoteURL = "http://localhost:8088"
let API = {
    get(resource, id) {
        return fetch(`${remoteURL}/${resource}/${id}`).then(e => e.json())
    },
    getAndExpand(resource, id, expanded) {
        return fetch(`${remoteURL}/${resource}/${id}?_expand=${expanded}`).then(e => e.json())
    },
    getAll(resource) {
        return fetch(`${remoteURL}/${resource}`).then(e => e.json())
    },
    delete(resource, id) {
        return fetch(`${remoteURL}/${resource}/${id}`, {
            method: "DELETE"
        })
            .then(result => result.json())
    },
    post(resource, newObject,) {
        return fetch(`${remoteURL}/${resource}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newObject)
        }).then(data => data.json())
    },
    update(resource, editedObject,) {
        return fetch(`${remoteURL}/${resource}/${editedObject.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedObject)
        }).then(data => data.json());

    }, getObjectWithDatabase(id, firstResource, secondResource) {
        return fetch(`${remoteURL}/${firstResource}/${id}?_embed=${secondResource}`)
            .then(result => result.json())
    },
    searchDatabase(search, database, type) {
        return fetch(`${remoteURL}/${database}?${type}_like=${search}`)
            .then(result => result.json())
    }


}

export default API 




