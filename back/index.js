const server = require("../back/src/server");
const dbConnection = require("../back/src/services/configDb");

const PORT = 3001 || 4521;

dbConnection().then(()=> {
    server.listen(PORT, ()=> {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch ((error) => {
    console.error("Database connection error:", error);
});


















// const server = require("..//back/src/server");
// const conDB = require("../back/src/config/conDB");

// const PORT = 3000;


// server.listen(PORT, () => {
//     conDB.on("error", console.error.bind(console, "Error de conexiòn"));
//     conDB.once("open", function() {
//         console.log("Conectado a la base de datos");
//     });
//     console.log("Servidor inicializado en el puerto 3000");
// });