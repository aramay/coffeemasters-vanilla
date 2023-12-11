const API = {
    url: '/data/menu.json',
    fetchMenu: async () => {
        const results = await fetch(API.url);
        return await results.json()
    }
}

export default API;