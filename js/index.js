const baseUrl = "https://api.github.com/search/users?q="

function getUser(name){
    let endpoint = `baseUrl + ${name}`
    let getConfig = {
        method: 'GET',
        headers: {
            'Accept': 'application/vnd.github.v3+json'
        },
        body: JSON.stringify({
            name
        })
    }
    
    fetch(endpoint, getConfig)
    .then(response => response.json())
    .then(results => console.log(results))
}