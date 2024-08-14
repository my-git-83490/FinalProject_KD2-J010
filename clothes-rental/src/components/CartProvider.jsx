import React, { createContext, useState, useEffect, useContext } from 'react';
import cartItemServices from './cartItemServices';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const userId = sessionStorage.getItem('id');

    useEffect(() => {
        const loadCartItems = async () => {
            try {
                if (userId) {
                    // Fetch all cart items for the user
                    const response = await cartItemServices.getAllCartItems();
                    const userCartItems = response.data.filter(item => item.cart.user.id === Number(userId));
                    setCartItems(userCartItems);
                }
            } catch (error) {
                console.error('Error loading cart items:', error);
            }
        };

        loadCartItems();
    }, [userId]);

    const addToCart = async (product, quantity) => {
        try {
            if (userId) {
                // Create the CartItemDTO to send to the backend
                const cartItemDTO = {
                    userId: Number(userId),
                    clothingItemId: product.id,
                    quantity: quantity,
                };

                console.log(cartItemDTO)
                // Add the item to the cart using the service
                await cartItemServices.createCartItem(cartItemDTO);

                // Update the cart items state by re-fetching
                const updatedCartItems = await cartItemServices.getAllCartItems();
                const userCartItems = updatedCartItems.data.filter(item => item.cart.user.id === Number(userId));
                setCartItems(userCartItems);
            }
        } catch (error) {
            console.error('Error adding to cart:', error);
        }
    };

    const clearCart = async () => {
        if (cartItems.length > 0) {
            try {
                for (const item of cartItems) {
                    await cartItemServices.deleteCartItem(item.id);
                }
                setCartItems([]); // Clear cart from state
            } catch (error) {
                console.error('Error clearing cart:', error);
            }
        }
    };

    const removeFromCart = async (productId) => {
        try {
            if (cartItems.length > 0) {
                const itemToRemove = cartItems.find(item => item.clothingItem.id === productId);
                if (itemToRemove) {
                    await cartItemServices.deleteCartItem(itemToRemove.id);

                    // Update the cart items state by re-fetching
                    const updatedCartItems = await cartItemServices.getAllCartItems();
                    const userCartItems = updatedCartItems.data.filter(item => item.cart.user.id === Number(userId));
                    setCartItems(userCartItems);
                }
            }
        } catch (error) {
            console.error('Error removing item from cart:', error);
        }
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
