const express = require("express"); 

const path = require("path"); 

const app = express(); 

app.use(express.static(path.join(__dirname, "public")));

// Configuração do EJS como view engine 

app.set("views", path.join(__dirname, "views")); 

app.set("view engine", "ejs"); 

// Rota principal 
const indexRouter = require("./routes/index"); 

app.use("/", indexRouter); 

// Rotas para usuários 
const usuarioRouter = require("./routes/usuario"); 

app.use("/usuario", usuarioRouter); 

// Rotas para integrantes 
const integrantesRouter = require("./routes/integrantes"); 

app.use("/integrantes", integrantesRouter); 

// Rotas para sistemasEnbarcados 
const sistemasEnbarcadosRouter = require("./routes/sistemasEnbarcados"); 

app.use("/sistemasEnbarcados", sistemasEnbarcadosRouter);

//Rotas para PW
const pwRouter = require("./routes/pw")

app.use("/pw", pwRouter)

//Rotas para vestibulinho
const vestibulinhoRouter = require("./routes/vestibulinho")

app.use("/vestibulinho", vestibulinhoRouter)

//Rotas para projeto
const projetoRouter = require("./routes/projeto")

app.use("/projeto", projetoRouter)

// Iniciar o servidor e sincronizar com o banco de dados 

app.listen(3000, () => { 

  console.log("Servidor em execução na porta 3000"); 

}); 