<<<<<<< HEAD
const remoteURL = "http://localhost:8088"
=======
const remoteURL = "http://localhost:5002"
>>>>>>> master
let API = {
    /*
          Since the purpose of this module is to be used by
          all of the more specialized ones, then the string
          of `animals` should not be hard coded here.
    */

<<<<<<< HEAD
    get(resource, id) {
=======
    get(resource,id ) {
>>>>>>> master
        return fetch(`${remoteURL}/${resource}/${id}`).then(response => response.json())
    },
    getAndExpand(id, resource, expanded) {
        return fetch(`${remoteURL}/${resource}/${id}?_expand=${expanded}`).then(response => response.json())
    },
    getAll(resource) {
        return fetch(`${remoteURL}/${resource}`).then(response => response.json())
    },
<<<<<<< HEAD
    delete(resource, id) {
=======
    delete(resource,id) {
>>>>>>> master
        return fetch(`${remoteURL}/${resource}/${id}`, {
            method: "DELETE"
        })
            .then(response => response.json())
    },
<<<<<<< HEAD
    post(resource, newObject) {
=======
    post(resource,newObject) {
>>>>>>> master
        return fetch(`${remoteURL}/${resource}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newObject)
        }).then(response => response.json())
    },
<<<<<<< HEAD
    update(resource, editedObject) {
=======
    update(resource,editedObject) {
>>>>>>> master
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

<<<<<<< HEAD
export default API
=======
export default API 
>>>>>>> master
