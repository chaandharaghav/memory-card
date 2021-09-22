function Card(props) {
  return (
    <div className="card">
      <p onClick={props.shuffleCards}>{props.info.name}</p>
    </div>
  );
}

export default Card;
