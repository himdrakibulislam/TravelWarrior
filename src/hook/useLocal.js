const addToLocal = id => {
    const exists = getLocal();
    let shopping_cart = {};
    if (!exists) {
      shopping_cart[id] = 1;
    }
    else {
      shopping_cart = JSON.parse(exists);
      if (shopping_cart[id]) {
        const newCount = shopping_cart[id] + 1;
        shopping_cart[id] = newCount;
      }
      else {
        shopping_cart[id] = 1;
      }
    }
    updateLocal(shopping_cart);
  }
  
  const getLocal = () => localStorage.getItem('TravelWarrior');
  
  const updateLocal = cart => {
    localStorage.setItem('TravelWarrior', JSON.stringify(cart));
  }
  
  const removeFromLocal = id => {
    const exists = getLocal();
    if (!exists) {
  
    }
    else {
      const shopping_cart = JSON.parse(exists);
      delete shopping_cart[id];
      updateLocal(shopping_cart);
    }
  }
  
  const getStoredCart = () => {
    const exists = getLocal();
    return exists ? JSON.parse(exists) : {};
  }
  
  const clearTheCart = () => {
    localStorage.removeItem('TravelWarrior');
  }
  export { addToLocal, removeFromLocal , clearTheCart, getStoredCart }