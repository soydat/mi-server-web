const express = require('express');


function main(){
    const app = express()
    const port = 3000
    const path = require('path');
    
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '/index.html'));
    });
    
    app.listen(port, () => {
        console.log(`Server started at http://localhost:${port}`);
    });
}

main();