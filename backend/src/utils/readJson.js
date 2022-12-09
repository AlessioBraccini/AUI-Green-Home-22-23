const fs = require('fs');

function readJson(path) {
    try {
        const jsonString = fs.readFileSync(path, 'utf-8');
        return JSON.parse(jsonString)
    } catch (err) {
        console.log(err)
    }
}

module.exports = {readJson}