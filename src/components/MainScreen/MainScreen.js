import React from 'react';
import { Link } from 'react-router-dom';
import './MainScreen.css';

const MainScreen = () => {
  const easyhscore = localStorage.getItem('easyhscore');
  const mediumhscore = localStorage.getItem('mediumhscore');
  const hardhscore = localStorage.getItem('hardhscore');

  const handleEasyReset = () => {
    localStorage.setItem('easyhscore', 0);
    window.location.reload(false);
  };

  const handleMediumReset = () => {
    localStorage.setItem('mediumhscore', 0);
    window.location.reload(false);
  };

  const handleHardReset = () => {
    localStorage.setItem('hardhscore', 0);
    window.location.reload(false);
  };

  const handleAllReset = () => {
    localStorage.setItem('easyhscore', 0);
    localStorage.setItem('mediumhscore', 0);
    localStorage.setItem('hardhscore', 0);
    window.location.reload(false);
  };

  return (
    <div className="mainscreen">
      <div className="level">
        <h2 style={{color: 'yellow', textShadow:'1px 2px 3px red'}}>Choose Level</h2>
        <Link to="/gameboardeasy" style={{ textDecoration: 'none' }}>
          <button className='md'>Easy</button>
        </Link>
        <Link to="/gameboardmedium" style={{ textDecoration: 'none' }}>
          <button className='md'>Medium</button>
        </Link>
        <Link to="/gameboardhard" style={{ textDecoration: 'none' }}>
          <button className='md'>Hard</button>
        </Link>
        <h2 style={{color: 'yellow', textShadow:'1px 2px 3px red'}}>Instructions</h2>
        <div className="instructions">
  <h3>Instructions</h3>
  <ul>
    <li>
      <strong>UP:</strong> Up arrow key or W
    </li>
    <li>
      <strong>DOWN:</strong> Down arrow key or S
    </li>
    <li>
      <strong>LEFT:</strong> Left arrow key or A
    </li>
    <li>
      <strong>RIGHT:</strong> Right arrow key or D
    </li>
  </ul>
  <p>
    <strong>Press P to Pause the game</strong>
  </p>
</div>

      </div>
      <div className="scorecard">
        <h2 style={{color: 'yellow', textShadow:'1px 2px 3px red'}}>Highest Scores</h2>
        <div className="hscore-div">
          <p className="levelinfo">
            Easy level: <span>{easyhscore == null ? 0 : parseInt(JSON.parse(easyhscore))}</span> 
          </p>
          <button className="resetbtn" onClick={handleEasyReset}>
            Reset this highscore
          </button>
        </div>
        <div className="hscore-div">
          <p className="levelinfo">
            Medium level: {mediumhscore == null ? 0 : parseInt(JSON.parse(mediumhscore))}
          </p>
          <button className="resetbtn" onClick={handleMediumReset}>
            Reset this highscore
          </button>
        </div>
        <div className="hscore-div">
          <p className="levelinfo">
            Hard level: {hardhscore == null ? 0 : parseInt(JSON.parse(hardhscore))}
          </p>
          <button className="resetbtn" onClick={handleHardReset}>
            Reset this highscore
          </button>
        </div>
        
      </div>
      <div className="resetall">
          <button className="resetallbtn" onClick={handleAllReset}>
            Reset all highscores
          </button>      
        </div>
    </div>
  );
};

export default MainScreen;
