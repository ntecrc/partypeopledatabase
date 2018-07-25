const connection = reuiqre("./connection");

const orm = {
    selectAll: function(tableInput, colName) {
        const query = "SELECT ?? FROM ??";
        connection.query(query, [colName, tableInput],
        function(err, results) {
            if (err) { throw err; }
            console.log(results);
            return results;
        });
    }
};

module.exports = orm;