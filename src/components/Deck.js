import React, { useState, useEffect } from 'react';

const Deck = () => {
  const [deck, setDeck] = useState(null);

  useEffect(() => {
    const fetchDeck = async () => {
      const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
      const data = await response.json();
      setDeck(data);
    };

    fetchDeck();
  }, []);

  const handleShuffle = async () => {
    if (deck) {
      const response = await fetch(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/shuffle/`);
      const data = await response.json();
      setDeck(data);
    }
  };

  return (
    <div>
      <p>Deck ID: {deck ? deck.deck_id : 'Loading...'}</p>
      <button onClick={handleShuffle}>Shuffle Deck</button>
    </div>
  );
};

export default Deck;