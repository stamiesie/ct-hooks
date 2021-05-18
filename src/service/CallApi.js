export const fetchQuote = async () => {
    const res = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=1');
    const json = await res.json();
    console.log('API call', json);

    return {
        name: json[0].character,
        image: json[0].image,
        text: json[0].quote,
    };
};