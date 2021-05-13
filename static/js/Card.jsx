function Card({word, color, id, onClick, isSelected}){
  const [isNew, updateIsNew] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => updateIsNew(false), 3000);
  }, []);

  return(
    <div 
      className='card' 
      id={id} 
      style={{color: color}}
      onClick={onClick}
    >
      {isSelected || isNew ? word : ''}
    </div>
  );
}