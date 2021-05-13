function Card({word, color, id, onClick, isSelected}){
  const [isNew, updateIsNew] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => updateIsNew(false), 1000);
  }, []);

  return(
    <div 
      className={`card ${ isSelected || isNew ? 'selected' : 'card-back'}`} 
      id={id} 
      style={{color: color}}
      onClick={onClick}
    >
      {isSelected || isNew ? word : ''}
    </div>
  );
}