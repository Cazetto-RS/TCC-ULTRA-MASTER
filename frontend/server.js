const express = require('express');
const path = require('path');
const { exec } = require('child_process'); // Importa a função exec
const app = express();
const PORT = 3000;

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public', 'pages')));

// Rota principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'pages' ,'index.html'));
});

// Rota específica (exemplo)
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'pages' , 'home.html'));
});

// Rota coringa (erro 404) — deve vir **depois** das rotas conhecidas
app.use((req, res) => {
  res.status(404).sendFile(path.join(publicPath, 'pages', 'erro.html'));
});

// Iniciar servidor e abrir o navegador Opera GX
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);

  // Caminho do Opera GX (com \\ duplo!)
  const operaPath = `"C:\\Users\\rafas\\AppData\\Local\\Programs\\Opera GX\\opera.exe"`;
  exec(`${operaPath} http://localhost:${PORT}`, (error) => {
    if (error) {
      console.error("❌ Erro ao abrir o Opera GX:", error);
    }
  });
});
