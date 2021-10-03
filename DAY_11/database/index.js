const {Sequelize} = require ("sequelize");

const sequelize = new Sequelize(
    "postgres",
    "postgres",
    "7777",
    {
        host: "localhost",
        dialect: "postgres"
    }
)

sequelize.sync();

(async() => {
    try {
        await sequelize.authenticate();
        console.log("connection with db success");
    }catch(err){
        console.log("unable to connect with db");
    }
})();

module.exports = sequelize;