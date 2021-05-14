function PlayArea({deck, updateDeck, cardsInPlay, updateCardsInPlay, playing, updatePlaying}){
  const [selectedCards, updateSelectedCards] = React.useState([]);

  React.useEffect(() => {
    let setOfCards = new Set(cardsInPlay);
    if (setOfCards.size == 1 && setOfCards.has(null)){
      alert(`Congrats, you win! 🌈`);
      updatePlaying(false); // this is partially working - the fetch is not happening to update the deck!
    }
  }, [cardsInPlay]);

  function selectCard(card){
    // select 1, then check a second selection
    if (selectedCards.length < 2){
      // keep track of what we've selected
      let selected = [];
      // NOTE: ... --> "spread operator"
      selected = [... selectedCards, card]
      updateSelectedCards(selected); // we can't reach into selectedCards and change it ourselves so we need to get React to do it for us
      console.log('selectedCards', selectedCards);
      if (selected.length === 2){
        // check card.word matches a previous selection
        if (selected[0].word === selected[1].word){
          console.log('found match', selected[0].word)
          setTimeout(() => removeValidPair(selected), 1000);
        } else {
          setTimeout(() => updateSelectedCards([]), 1000);
        }
      }
    }
  }

  function removeValidPair(pairOfCards) {
    const replacementCards = [];
    const numNewCards = 16 - cardsInPlay.length + 2 ;
    const newCards = deck.slice(deck.length - numNewCards); // gives us the last two cards

    // iterate over all cards in play
    //    check if they are the ones to keep or to change
    for (const card of cardsInPlay) {
      if (pairOfCards.includes(card)) {
        if (newCards.length > 0){
          // update the cards in play --> remove the pair
          replacementCards.push(newCards.pop());
        } else {
          replacementCards.push(null);
        }
      } else {
        replacementCards.push(card);
      }
    }

    // get a new pair of cards out of the deck
    updateDeck(deck.slice(0, deck.length - numNewCards));
    // put the new cards into play
    updateCardsInPlay(replacementCards);
    setTimeout(() => updateSelectedCards([]), 1000); // dealing with timing - make sure this happens in a timely way
  }

  return(
    <div id='play-area'>
      {/* (explanation of comment below!)
          option 1: 
            param => returnVal
          option 2:
            param => { return returnVal } 
      */}
      {cardsInPlay.map(card => // with a fcn expr, if we use curly braces, need explicit return statement! (or do it this way with no curly braces)
        card ? <Card
            key={card.id}
            color={card.color}
            word={card.word}
            isSelected={selectedCards.includes(card)}
            onClick={selectedCards.includes(card) ? null: () => selectCard(card)} // ternary expression to keep you from clicking on the same card twice to remove it!
            // need to wrap event handler in a callback function since we need to specify card as an argument, otherwise it'll execute immediately (not on click)
            // if we didn't need an argument, we could just write onClick={selectCard} with NO PARENS
          /> : <div 
            className='card' 
          />
      )} {/* map the array of cards to an array of card React components */}
    </div>
  );
}