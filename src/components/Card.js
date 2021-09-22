function Card(props) {
  return (
    <div className="card">
      <p onClick={props.shuffleCards}>{props.info.title}</p>
    </div>
  );
}

export default Card;
