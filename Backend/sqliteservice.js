const sqlite3 = require('sqlite3').verbose();
let db;
class SqliteService {
    constructor() {
        db = new sqlite3.Database('./db/Engie.db', (err) => {
            if (err) {
                return console.error(err.message)
            }
            console.log('Connected to the engie database.');
        });
    }

    get averageEnergyUse() {
        return "";
    }

    get averageChilledWaterUse() {
        
    }
}
