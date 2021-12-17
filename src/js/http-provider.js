const jokeUrl = 'https://api.chucknorris.io/jokes/random';

const obtenerChiste = async () => {

    try {
        const resp = await fetch(jokeUrl);
    
        //Si el status de la pagina no es ok (200), se sale del proceso
        if (!resp.ok) throw 'No se pudo realizar la peticion';
        
        
        //se deconstruye la respuesta para solo obtener esos 3 valores
        const {icon_url, id, value} = await resp.json();

        return {icon_url, id, value};
    }
    catch (err) {
        throw err;
    }
};


export {
    obtenerChiste,
    obtenerUsuarios
}


const urlUsuarios = 'https://reqres.in/api/users?page=2';
const obtenerUsuarios = async () => {
    const resp = await fetch(urlUsuarios);
    
    // en el endpoint la propiedad se llamada data pero le estoy cambiando el nombre con : para poder llamarlo 'usuyarios'
    const {data:usuarios} = await resp.json(); 

    return usuarios
}