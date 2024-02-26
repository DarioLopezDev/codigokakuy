module.exports = (sequelize, DataTypes) => {
    const alias = 'Cart';
    const cols = {
        cart_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        total: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        }
    };
    const config = {
        tableName: 'carts',
        timestamps: false
    };
    
    const Cart = sequelize.define(alias, cols, config);

    Cart.associate = function(models) {
        Cart.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'user_id'
        });
        Cart.belongsToMany(models.Cart_Book, {
            as: 'cart_book',
            foreignKey: 'cart_id'
        });
    };

    return Cart;
};