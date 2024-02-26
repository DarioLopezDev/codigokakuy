module.exports = (sequelize, DataTypes) => {
    const alias = 'Author';
    const cols = {
        author_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fullname: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    };
    const config = {
        tableName: 'authors',
        timestamps: false
    };
    
    const Author = sequelize.define(alias, cols, config);

    return Author;
};