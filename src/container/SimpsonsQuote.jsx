import React, { useState } from 'react';
import Fetch from '../components/app/presentation/Fetch';
import Quote from '../components/app/presentation/Quote';
import { fetchQuote } from '../service/CallApi';

const SimpsonsQuote = () => {
    // set state with hook, initialize to null
    const [quote, setQuote] = useState({});

    const handleClick = async () => {
        const quote = await fetchQuote();
        setQuote(quote);
};

    return (
        <>
        <Fetch onClick={handleClick} />
        <Quote 
        name={quote.name}
        image={quote.image}
        text={quote.text}/>
        </>
    );
};

export default SimpsonsQuote;