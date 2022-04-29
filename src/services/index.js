const API_URL = 'https://best-game-price-search.p.rapidapi.com';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'best-game-price-search.p.rapidapi.com',
        'X-RapidAPI-Key': '12ded0bea5msh3744a7a62dff07ep1a1ef5jsnf39c850a3b26'
    }
};


const getSteamSpecials = (page) => {
    return fetch(`${API_URL}/steam/specials?page=1&limit=5&currency=USD`, options)
        .then(res => res.json())
        .then(data => data).catch(err => err);
};

export {getSteamSpecials};