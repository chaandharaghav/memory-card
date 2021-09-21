// importing styles
import '../styles/HeaderDivision.css';

function HeaderDivision(props) {
  return (
    <div id="header-division">
      <div id="header-division-image-div">
        <img src={props.imgURL} alt={props.alternateName} />
      </div>
    </div>
  );
}

export default HeaderDivision;
