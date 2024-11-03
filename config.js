const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "put_your_sessition_id",
MONGODB: process.env.MONGODB || "mongodb://mongo:KhDcfCyOvPeqFRmQmSxyqmWnUmmuugbw@autorack.proxy.rlwy.net:45346",
//ALIVE_IMG: process.env.ALIVE_IMG || "",
//ALIVE_MSG: process.env.ALIVE_MSG || "> H E L L O *X-DARK*",
//AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
//MODE: process.env.MODE || "public",    
};
