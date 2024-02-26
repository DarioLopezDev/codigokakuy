module.exports = (sequelize, DataTypes) => {
    const alias = 'Cart_Book';
    const cols = {
        cartBooks_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cart_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        book_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        total: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        }
    };
    const config = {
        tableName: 'carts_books',
        timestamps: false
    };
    
    const Cart_Book = sequelize.define(alias, cols, config);

    return Cart_Book;
};