function Card({word, color, id}){
  return(
    <div className='card' id={id} style={{color: color}}>
      {word}
    </div>
  );
}