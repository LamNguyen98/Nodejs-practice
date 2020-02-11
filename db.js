const low = require('lowdb');
const Filesync = require('lowdb/adapters/FileSync');
const adapter = new Filesync('db.json');

db = low(adapter);

db.defaults({ users: [] })
    .write();

module.exports = db;