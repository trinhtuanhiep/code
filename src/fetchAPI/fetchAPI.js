function getUser() {
    return new Promise((resolve, reject) => {
        let url = 'http://localhost:3001/students'
        let config = { method: "GET" }
        fetch(url, config)
            .then(res => res.json())
            .then(res => resolve(res))
            .catch(error => reject(error))
    })
}

function addUser(data) {
    console.log(data, "fetch")
    return new Promise((resolve, reject) => {
        let url = 'http://localhost:3001/students'
        let config = {
            method: "POST",   
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        }
        fetch(url, config)
            .then(res => res.json())
            .then(res => resolve(res))
            .catch(error => reject(error))
    })
}

//path params vs query path và body
export {
    getUser,
    addUser
}

// API {url: lấy dữ liệu
//header: khai báo kiểu dữ liệu (json)
///body: chứa dữ liệu truyền đi
//method: HTTP GET POST PUT DELETE }
//
//
