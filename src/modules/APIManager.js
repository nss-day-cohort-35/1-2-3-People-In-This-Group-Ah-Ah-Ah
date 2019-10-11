const remoteURL = "http://localhost:8088"

let API = {

    get(resource, id) {
        return fetch(`${remoteURL}/${resource}/${id}`).then(response => response.json())
    },
    getAndExpand(id, resource, expanded) {
        return fetch(`${remoteURL}/${resource}/${id}?_expand=${expanded}`).then(response => response.json())
    },
    getAll(resource) {
        return fetch(`${remoteURL}/${resource}`).then(response => response.json())
    },
    delete(resource, id) {
        return fetch(`${remoteURL}/${resource}/${id}`, {
            method: "DELETE"
        })
            .then(response => response.json())
    },
    post(resource, newObject) {
        return fetch(`${remoteURL}/${resource}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newObject)
        }).then(response => response.json())
    },
    update(resource, editedObject) {
        return fetch(`${remoteURL}/${resource}/${editedObject.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedObject)
        }).then(response => response.json());

    }, getObjectWithDatabase(firstResource, id, secondResource) {
        return fetch(`${remoteURL}/${firstResource}/${id}?_embed=${secondResource}`)
            .then(response => response.json())
    },
     searchDatabase(search, database, type) {
        return fetch(`${remoteURL}/${database}?${type}_like=${search}`)
            .then(response => response.json())
    }


}

export default API
