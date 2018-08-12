const db = require('./db');

/*

You don't need as id in most cases, as the property $loki is always
available and is an auto increment number, being like an id.

db.define('modelName', {
    property1: db.TYPE,
    property2: {
        type: db.ANY,
        allowNull: true,
        defaultValue: null
        unique: false
    }
})
*/

db.define('User', {
    name: {
        type: db.STRING,
        allowNull: false
    },
    password: db.STRING,
    config: {
        type: db.ANY,
        allowNull: false,
        defaultValue: {}
    },
    isActive: {
        type: db.BOOLEAN,
        defaultValue: true
    }
});
