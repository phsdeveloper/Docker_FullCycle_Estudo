//Aplicacao simples em nodeJS.
const mongoose = require('mongoose');

function formatDateTime(date = new Date()) {
    try {
        const pad = value => String(value).padStart(2, '0');
        return `${pad(date.getDate())}/${pad(date.getMonth() + 1)}/${date.getFullYear()} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
    } catch (error) {
        console.error('Error formatting date and time:', error);
        throw error;
    }
}

mongoose.connect('mongodb://mongo:27017/mydatabase')
    .then(() => { console.log(`[${formatDateTime()}] Connected to MongoDB`); })
    .catch(err => {
        console.error("");
        console.error(` - [${formatDateTime()}] Error connecting to MongoDB`);
        console.error(`   - Message: [${err.message}]`);
        console.error("");
    });