module.exports = (sequelize, DataTypes) => {
    const alias = 'Publisher';
    const cols = {
        publisher_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    };
    const config = {
        tableName: 'publishers',
        timestamps: false
    };
    
    const Publisher = sequelize.define(alias, cols, config);

    return Publisher;
};