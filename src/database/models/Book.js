module.exports = (sequelize, DataTypes) => {
    const alias = 'Book';
    const cols = {
        book_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        isbn: {
            type: DataTypes.BIGINT(13),
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        pages: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        size: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        year: {
            type: DataTypes.INTEGER(4),
            allowNull: false
        },
        desription: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        stock: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        author_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        publisher_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        genre_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        }
    };
    const config = {
        tableName: 'books',
        timestamps: false
    };
    
    const Book = sequelize.define(alias, cols, config)

    return Book
};