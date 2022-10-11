export const useGetItemStorage = (key) => {
    let itemsStorage = (JSON.parse(localStorage.getItem(key))) ? JSON.parse(localStorage.getItem(key)): [];
    return itemsStorage;
}


export const useCreateItemStorage = (key, value) => {
    let itemsStorage = (JSON.parse(localStorage.setItem(key, value))) ?
                        JSON.parse(localStorage.setItem(key, value)): 
                        [];
    return itemsStorage;
}