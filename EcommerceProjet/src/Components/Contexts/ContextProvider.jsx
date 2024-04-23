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
        case "REMOVE_ITEM":
            const itemToRemove = state.items.find(item => item.id === action.payload.id);
            const updatedTotalAmount = state.totalAmount - (itemToRemove.price * itemToRemove.quantity);
            
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id),
                totalAmount: updatedTotalAmount
            };

        default:
            return state;
    }
}

export { cartReducer, initialState };
