# Pasos para correr la api

### Nota 
Configura los archivos en este orden    
**server, database, client**

**Estas en server**

    Estar en la ruta de esta carpeta que se llama server

1. Cambiar el nombre del archivo .env.template a .env y agregar la informacion correspondiente

2. Ejecuta el comando 

    **npm install**

2. Ejecuta el comando 

    **npx prisma migrate dev** **le pones cualquier nombre a la migracion**

3. Luego ejecuta este comando

    **npm run dev**

