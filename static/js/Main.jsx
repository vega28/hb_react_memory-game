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

  if (playing){
    return(
      <React.Fragment>
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