const initialState = {
    items: [],
    totalAmount: 0
};

function cartReducer(state, action) {
    switch (action.type) {
        case 'ADD_ITEM':
            const newItem = action.payload;
            const quantity = newItem.quantity;

            const existingItemIndex = state.items.findIndex(item => item.id === newItem.id);
            let updatedItems;

            if (existingItemIndex !== -1) { 
                updatedItems = state.items.map((item, index) => 
                    index === existingItemIndex ? { ...item, quantity: item.quantity + quantity } : item 
                );
            } else {
                updatedItems = [...state.items, {...newItem, quantity: quantity}];
            }

            const price = newItem.price; // Définition du prix
            const totalPrice = price * quantity; // Calcul du prix total

            return {
                ...state,
                items: updatedItems,
                totalAmount: state.totalAmount + totalPrice // Utilisation de totalPrice
            };
        default:
            return state;
    }
}

export { cartReducer, initialState };
