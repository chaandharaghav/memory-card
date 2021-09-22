// importing styles
import '../styles/Card.css';

function Card(props) {
  return (
    <div className="card">
      <figure>
        <img src={props.info.imgURL} alt={props.info.name} />
        <figcaption>{props.info.name}</figcaption>
      </figure>
    </div>
  );
}

export default Card;
