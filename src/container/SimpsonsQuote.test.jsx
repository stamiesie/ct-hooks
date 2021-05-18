import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import SimpsonsQuote from './SimpsonsQuote';

const server = setupServer(
    rest.get('https://thesimpsonsquoteapi.glitch.me/quotes?count=1', (req, res, ctx) => {
        return res(
            ctx.json([
                    {
                    quote: 
                    "Back in Edinburg, we had a coal miners strike. All we wanted were hats with a wee light on top. Then one day the mine collapsed. No one made it out alive, not even Willie!",
                    character: 
                    "Groundskeeper Willie",
                    image: 
                    "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FGroundskeeperWillie.png?1497567512063",
                    },
                ])
            );
        }
    )
)

describe('SimpsonsQuote container', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());

    it('fetches a random quote and character', async () => {
        render(<SimpsonsQuote />);

        const fetchButton = screen.getByRole('button');
        fireEvent.click(fetchButton);

        return waitFor(() => {
            screen.getByAltText('Groundskeeper Willie');
            screen.getByText('Back in Edinburg, we had a coal miners strike. All we wanted were hats with a wee light on top. Then one day the mine collapsed. No one made it out alive, not even Willie!');
        });
    });
});
