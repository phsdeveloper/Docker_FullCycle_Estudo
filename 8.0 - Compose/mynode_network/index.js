//Aplicacao simples em nodeJS.
const mongoose = require('mongoose');
const appName = process.env.APP_Name;

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
    .then(() => {
        console.log("");
        console.log(` - Application Name: ${appName}`);
        console.log(`   - [${formatDateTime()}] Connected to MongoDB successfully - Alterado.-,9`);
        console.log("");
    })
    .catch(err => {
        console.error("");
        console.error(` - Application Name: ${appName}`);
        console.error(`   - [${formatDateTime()}] Error connecting to MongoDB`);
        console.error(`   - Message: [${err.message}]`);
        console.error("");
    });