module.exports = (sequelize, DataTypes) => {
    const alias = 'Genre';
    const cols = {
        genre_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
    };
    const config = {
        tableName: 'genres',
        timestamps: false
    };
    
    const Genre = sequelize.define(alias, cols, config);

    return Genre;
};