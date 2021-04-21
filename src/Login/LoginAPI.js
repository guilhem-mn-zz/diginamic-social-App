const api = process.env.REACT_APP_API;

export const UserLogin = (user) => {
    return fetch(
        //que fait donc le fetch ?
        api + '/api/login',
        {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(user)
        }
    )
    //en cas d'erreur
    .then((response)=> response.json())
    //en cas de succès
    .then((response) => response.token ? response : console.log(response.error))
}