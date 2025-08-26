const express = require("express"); 

const path = require("path"); 

const app = express(); 

// Configurar pasta de arquivos estáticos (ex: public)
app.use(express.static(path.join(__dirname, "public")));

// Configuração do EJS como view engine 

app.set("views", path.join(__dirname, "views")); 

app.set("view engine", "ejs"); 

// Rota principal 

const indexRouter = require("./routes/index"); 

app.use("/", indexRouter); 

// Rotas para categorias e produtos 

const categoriaRouter = require("./routes/categorias"); 

app.use("/categorias", categoriaRouter); 

app.listen(3000, () => { 

  console.log("Servidor em execução na porta 3000"); 

}); 