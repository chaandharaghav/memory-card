// importing styles
import '../styles/ScoreCard.css';

function ScoreCard(props) {
  return (
    <div id="scorecard">
      <div id="current-score">
        <span>Current score: {props.currentScore}</span>
      </div>
      <div id="best-score">
        <span>Best score: {props.bestScore}</span>
      </div>
    </div>
  );
}

export default ScoreCard;
