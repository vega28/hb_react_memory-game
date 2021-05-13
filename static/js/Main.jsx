function Main(){
  const [playing, updatePlaying] = React.useState(false);

  function initialDeal(){
    updatePlaying(true);
  }

  if (playing){
    return(
      <React.Fragment>
      <PlayArea />    
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