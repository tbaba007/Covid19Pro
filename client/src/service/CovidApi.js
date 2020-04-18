const fetchAll = () => {
    return fetch('https://corona.lmao.ninja/v2/countries')
        .then(success => {
            return success.json();
        })

}



export {
    fetchAll
}