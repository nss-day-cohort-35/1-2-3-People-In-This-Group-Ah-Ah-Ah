const remoteURL = "http://localhost:8088"

let taskManager = {
    getAll() {
        return fetch(`${remoteURL}/tasks`).then(r => r.json())
    },
    get(id) {
        return fetch(`${remoteURL}/tasks/${id}`).then(r => r.json())
    },
    post(newTask) {
        return fetch(`${remoteURL}/tasks`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTask)
        }).then(task => task.json())
    },
    put(editedTask) {
        return fetch(`${remoteURL}/tasks/${editedTask.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedTask)
        }).then(response => response.json())
    },

    doneTask(object) {
        return fetch(`${remoteURL}/tasks/${object.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(object)
        }).then(task => task.json())
    }
}

export default taskManager