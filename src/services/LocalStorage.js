export const getItem = (key) => {
    try {
        return JSON.parse(localStorage.getItem(key));
    } catch (e) {
        return null;
    }
};

const setItem = (key, item) => {
    localStorage.setItem(key, JSON.stringify(item));
};

export const updateUserLocalStorage = (user) => {
    setItem(user.name, user);
}
