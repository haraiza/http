const urlCRUD = 'https://reqres.in/api/users';
// ------------------------------------------------------------------------------
const getUsuario = async (id) => {
    const resp = await fetch(`${urlCRUD}/${id}`);
    const { data } = await resp.json();

    return data;
}

// ------------------------------------------------------------------------------
const crarUsuario = async (usuario) => {
    const resp = await fetch(urlCRUD, {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log(await resp.json());
    //return await resp.json();  //En vez de poner un console.log generalmente es preferible regresar el usuario
}
// ------------------------------------------------------------------------------
const actualizarUsuario = async (id, usuario) => {
    const resp = await fetch(`${urlCRUD}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log(await resp.json());
    //return await resp.json();  //En vez de poner un console.log generalmente es preferible regresar el usuario
}
// ------------------------------------------------------------------------------
const borrarUsuario = async (id) => {
    const resp = await fetch(`${urlCRUD}/${id}`, {
        method: 'DELETE'
    });

    return (resp.ok) ? 'Borrado' : 'No se pudo eliminar';
}
// ------------------------------------------------------------------------------
export { getUsuario, crarUsuario, actualizarUsuario, borrarUsuario }