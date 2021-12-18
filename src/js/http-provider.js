const jokeUrl = 'https://api.chucknorris.io/jokes/random';

export {
    obtenerChiste,
    obtenerUsuarios,
    subirImagen
}

const obtenerChiste = async () => {

    try {
        const resp = await fetch(jokeUrl);

        //Si el status de la pagina no es ok (200), se sale del proceso
        if (!resp.ok) throw 'No se pudo realizar la peticion';


        //se deconstruye la respuesta para solo obtener esos 3 valores
        const { icon_url, id, value } = await resp.json();

        return { icon_url, id, value };
    }
    catch (err) {
        throw err;
    }
};




const urlUsuarios = 'https://reqres.in/api/users?page=2';

const obtenerUsuarios = async () => {
    try {
        const resp = await fetch(urlUsuarios);

        // en el endpoint la propiedad se llamada data pero le estoy cambiando el nombre con : para poder llamarlo 'usuyarios'
        const { data: usuarios } = await resp.json();

        return usuarios

    } catch (err) {
        throw err;
    }
}


//Cloudinary
const cloudPreset = 'i5ctxgv5';
const cloudUrl = 'https://api.cloudinary.com/v1_1/haraiza/upload'

//ArchivoSubir :: File
const subirImagen = async (archivoSubir) => {
    //El formData es como el objeto-plantilla de lo que se va a subir
    const formData = new FormData();
    
    //El upload_preset,cloudPreset es una propiedad deCloudinary. Otras paginas que sean de subir imagenes No requerian de esa propiedad. 
    //Seguramente tendran uno diferente pero equivalente
    formData.append('upload_preset', cloudPreset);
    //file es el archivo de imagen que voy a subir
    formData.append('file', archivoSubir);

    try {
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });

        if (resp.ok) {
            const cloudResp = await resp.json();
            console.log(cloudResp);
            //Se regresa el cloudResp.secure_url porque ese es el link de la imagen que se acaba de subir a Cloudinary.
            return cloudResp.secure_url;
        } else {
            throw await resp.json();
        }
    } catch (err) {
        throw err;
    }
}