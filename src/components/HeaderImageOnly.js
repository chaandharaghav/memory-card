// importing styles
import '../styles/HeaderImageOnly.css';

function HeaderImageOnly(props) {
  return (
    <h1>
      <img src={props.imgURL} alt={props.alternateName} />
    </h1>
  );
}

export default HeaderImageOnly;
