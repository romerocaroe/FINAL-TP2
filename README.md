# FINAL-TP2

## Setup del proyecto
TP2 de la materia Taller de Programación 2 de la ORT.
API con Express.
### Configuración 
```
npm install
```
```
Configurar las variables de entorno (archivo .env) según el contenido enviado por mail.
```
### Para correrlo
```
npm run watch
```
## Rutas
Obras / Colecciones / Usuarios (GET-POST-PUT-DELETE)
```
http://localhost:5000/obra
```
```
http://localhost:5000/coleccion
```
```
http://localhost:5000/usuario
```

Obtener/Actualizar/Eliminar por ID (en el caso de actualizar enviar en el body la información actualizada)
```
http://localhost:5000/obra/ID
```
```
http://localhost:5000/coleccion/ID
```
```
http://localhost:5000/usuario/ID
```
## Envío de información
Para enviar información, ejemplo, en la creación obras, se refiere enviar en el body con formato JSON:
```json
{
  "title":"",
  "description": "",
  "author": "",
  "technique": "",
  "image": "",
  "culture": "",
  "url": "",
  "division": ""
}
```
