function PlayArea({deck, updateDeck, cardsInPlay, updateCardsInPlay}){

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
          />
      )} {/* map the array of cards to an array of card React components */}
    </div>
  );
}