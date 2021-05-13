function PlayArea({deck, updateDeck, cardsInPlay, updateCardsInPlay}){
  const [selectedCards, updateSelectedCards] = React.useState([]);

  function selectCard(card){
    // select 1, then check a second selection
    if (selectedCards.length < 2){
      // keep track of what we've selected
      let selected = [];
      selected = [... selectedCards, card]
      updateSelectedCards(selected); // we can't reach into selectedCards and change it ourselves so we need to get React to do it for us
      console.log('selectedCards', selectedCards);
      if (selected.length === 2){
        // check card.word matches a previous selection
        if (selected[0].word === selected[1].word){
          console.log('found match', selected[0].word)
        }
        setTimeout(() => updateSelectedCards([]), 1000);
      }
    }
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
          <Card
          key={card.id}
          color={card.color}
          word={card.word}
          onClick={() => selectCard(card)} 
          // need to wrap event handler in a callback function since we need to specify card as an argument, otherwise it'll execute immediately (not on click)
          // if we didn't need an argument, we could just write onClick={selectCard} with NO PARENS
          />
      )} {/* map the array of cards to an array of card React components */}
    </div>
  );
}