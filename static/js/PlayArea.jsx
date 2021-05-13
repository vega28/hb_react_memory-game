function PlayArea(){
  const [cardData, updateCardData] = React.useState([]); /* array destructuring */
  const [cardsInPlay, updateCardsInPlay] = React.useState([]);

  React.useEffect( () => {
    fetch('/cards.json')
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        updateCardData(data); /* hey react, hold onto this, we'll wanna use it later */
        //   cards.push(<Card color=data.color word=data.word />)
    })
  }, []);

//   updateCardsInPlay(cardData.slice(0,16));

  return(
    <div id='play-area'>
      {cardData.map(card => {
          <Card
          key={card.id}
          color={card.color}
          word={card.word}
          />
      })}
      {/* <Card color={cardData[0].color} word={cardData[0].word} /> */}
      <Card id='0b' color='blue' word='badwolf' />
    </div>
  );
}