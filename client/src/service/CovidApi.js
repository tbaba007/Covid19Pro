const fetchAll = () => {
    return fetch('https://corona.lmao.ninja/countries')
        .then(success => {
            return success.json();
        })

}



export {
    fetchAll
}