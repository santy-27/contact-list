const contactos = [
    {
      id: 1,
      nombreCompleto: "Sulma figueroa garcia",
      celular: 3057971209,
      correo: "zulmita25@live.com",
    },
    {
      id: 2,
      nombreCompleto: "Javier Robayo",
      celular: 3229811715,
      correo: "Javier-1983@gmail.com",
    },    
    {
        id: 3,
        nombreCompleto: "Manuel Robayo figueroa",
        celular: 3057458612,
        correo: "manuel27@live.com",
      },
      {
        id: 4,
        nombreCompleto: "Gloria garcia",
        celular: 311357852,
        correo: "Gloriasira54@live.com",
      },
      {
        id: 5,
        nombreCompleto: "Marlen Ramirez",
        celular:601910162,
        correo: "marlencita245@gmail.com",
      },
      {
        id: 6,
        nombreCompleto: "Maicol silva figueroa",
        celular:3054896254,
        correo: "michellsilv79@gmail.com",
      },
      {
        id: 7,
        nombreCompleto: "jose robayo",
        celular:3058456947,
        correo: "josehernan465@gmail.com",
      },
      {
        id: 8,
        nombreCompleto: "sandra figueroa garcia",
        celular:3027413695,
        correo: "sandritafigueroa1975@gmail.com",
      },
      {
        id: 9,
        nombreCompleto: "Jeison figueroa",
        celular:3112356815,
        correo: "jeisonfigueroa1995@gmail.com",
      },
      {
        id: 10,
        nombreCompleto: "heidy martinez",
        celular:3125968745,
        correo: "heidymartin27@gmail.com",
      }
      
];
const añadirContacto = (contactos.push = {id: 11, nombre: "Wilmar robayo", celular: "3028441720", correo: "wilmarrobayo1985@gmail.com"});
contactos.splice(3, 1);
const eliminadoContacto = contactos.splice( 2, 1);
console.log(contactos)
