const express = require('express');
const app = express();
const os = require('os');
const port = process.env.PORT || 3000;
let message = process.env.MESSAGE || "Mensagem Padrão"

// Função para formatar data/hora no formato dd/MM/yyyy HH:mm:ss
function formatarData(data) {
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    const horas = String(data.getHours()).padStart(2, '0');
    const minutos = String(data.getMinutes()).padStart(2, '0');
    const segundos = String(data.getSeconds()).padStart(2, '0');
    return `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`;
}

// Converter bytes para GB
function bytesParaGB(bytes) {
    return (bytes / (1024 ** 3)).toFixed(2);
}

const sistemaOperacional = os.platform();
const dataHora = formatarData(new Date(Date.now() - 3 * 60 * 60 * 1000)); // Ajuste de fuso horário para -3 horas
const arquitetura = os.arch();
const memoriaTotal = bytesParaGB(os.totalmem());
const memoriaLivre = bytesParaGB(os.freemem());



message += `
  - S.O = ${sistemaOperacional}
  - Data/Hora inicial = ${dataHora}
  - Arquitetura = ${arquitetura}
  - Memória Total = ${memoriaTotal} GB
  - Memória Livre = ${memoriaLivre} GB
`;

app.get('/', (req, res) => {

    const dataHoraGet = formatarData(new Date(Date.now() - 3 * 60 * 60 * 1000)); // Ajuste de fuso horário para -3 horas
    let messageGet = `
  - S.O = ${sistemaOperacional}
  - Data/Hora = ${dataHoraGet}
  - Arquitetura = ${arquitetura}
  - Memória Total = ${memoriaTotal} GB
  - Memória Livre = ${memoriaLivre} GB
`;

    res.send(messageGet);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
    console.log(`- Mensagem: ${message}`);
});