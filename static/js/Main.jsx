function Main(){
  const [playing, updatePlaying] = React.useState(false);
  const [deck, updateDeck] = React.useState([]); /* array destructuring */
  const [cardsInPlay, updateCardsInPlay] = React.useState([]);

  React.useEffect( () => {
    fetch('/cards.json')
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        updateDeck(data); /* hey react, hold onto this, we'll wanna use it later */
        //   cards.push(<Card color=data.color word=data.word />)
    })
  }, []);

  function initialDeal(){
    updatePlaying(true);
    updateCardsInPlay(deck.slice(0,16));
    updateDeck(deck.slice(16, deck.length));
  }

  // try putting this block into a useEffect so it doesn't run EVERY TIME
  let tableCardsSet = new Set(cardsInPlay);
  let tableCount = tableCardsSet.size;
  if (tableCardsSet.has(null)) {
    tableCount --;
  } 

  if (playing){
    return(
      <React.Fragment>
        <p id='deck-count'>{deck.length} Cards in Deck</p>
        <p id='table-count'>{tableCount} Cards on Table</p>
        <PlayArea 
          deck={deck} 
          updateDeck={updateDeck} 
          cardsInPlay={cardsInPlay} 
          updateCardsInPlay={updateCardsInPlay} 
        /> 
        {/* in component above we're saying the parent's component will also be the childs componenet */}
      </React.Fragment>
    )
  } else {
    return(
        <React.Fragment>
        <button onClick={initialDeal}>Deal</button>
        </React.Fragment>
    );
  }
}