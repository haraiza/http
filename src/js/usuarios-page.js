
import { obtenerUsuarios } from './http-provider'

const body = document.body;
let tbody;
let correlativo = 0;

const crearHtml = () => {

    const html = `
    <h1 class="mt-5"> Usuarios</h1>
    <hr>
    <table class="table">
    <thead>
    <tr>
    <th scope="col">#</th>
    <th scope="col">email</th>
    <th scope="col">Nombre</th>
    <th scope="col">Avatar</th>
    </tr>
    </thead>
    <tbody>
    </tbody>
    </table>
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.appendChild(div);

    tbody = document.querySelector('tbody');
}


const crearFilaUsuario = (usuario) => {
    correlativo++;

    // En la tabla deben de colocar un correlativo empezando en 1
    // También deben de colocar el avatar
    const html = `
        <td scope="col"> ${correlativo} </td>
        <td scope="col"> ${usuario.email} </td>
        <td scope="col"> ${usuario.first_name} ${usuario.last_name} </td>
        <td scope="col">
            <img class="img-thumbnail" src="${usuario.avatar}">
        </td>
    `;

    const tr = document.createElement('tr');
    tr.innerHTML = html;

    // Añadir el table row (tr) dentro del TBody creado anteriormente
    tbody.appendChild(tr);


}


export const init = async () => {

    crearHtml();
    correlativo = 0;

    // Obtener la lista de usuarios usando el servicio creado
    // const usuarios = await obtenerUsuarios();
    // usuarios.forEach(crearFilaUsuario)        ;

    // Es lo mismo que el codigo de arriba
    (await obtenerUsuarios()).forEach(crearFilaUsuario);
}

