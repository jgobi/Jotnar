function c(){
    return b.define('User', {
        name: {
            type: a.TYPES.STRING,
            allowNull: false
        },
        password: a.TYPES.STRING,
        config: {
            type: a.TYPES.ANY,
            allowNull: false,
            defaultValue: {}
        },
        isActive: {
            type: a.TYPES.BOOLEAN,
            defaultValue: true
        }
    }, false);
}
module.exports = c();