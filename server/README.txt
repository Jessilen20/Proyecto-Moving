Proyecto Moving - server

Requisitos para iniciar el servidor:
1. Antes de iniciar el servidor instalar npm y las dependencias necesarias que se encuentran en el package.json

2. Se inicia el servidor con npm start


Descripción del servidor:
1. En el proyecto se utiliza el servidor Express por el puerto 8000.

2. Se utiliza nodemon para visualizar los cambios en tiempo real.

3.Utiliza Mongoose para la base de datos, para acceder a la base se esta usando 127.0.0.1 en lugar de localhost.

4.Se definen cookies para que la informacion se guarde en el navegador del usuario.


Este proyecto utiliza un CRUD completo para crear, leer, editar y eliminar informacion:

* Se crean en la base de datos, 2 colecciones: [Academias] y [Usuarios], esto se hace para separar las funcionalidades.

* Cada coleccion tiene su modelo y controladores.

* Se usa un solo archivo de rutas para ambas colecciones.

* Se utiliza bcrypt para encriptar la contraseña del usuario y darle mayor seguridad a sus datos.

* Se utiliza JWT para generar un token encriptado y ayuda en las validaciones cuando se registra y se loguea un usuario.