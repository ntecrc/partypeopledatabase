const connection = require('./config/orm');

console.log(orm);

orm.selectAll("parties", "party_name");