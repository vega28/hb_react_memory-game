function Card({word, color, id, onClick}){
  return(
    <div 
      className='card' 
      id={id} 
      style={{color: color}}
      onClick={onClick}
    >
      {word}
    </div>
  );
}