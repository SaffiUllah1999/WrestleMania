import React from 'react';
import '../style/Motivations.css';

const WMotivations = () => (
  <div className="card">
    <h3>Motivations</h3>
    <div className="motivation-bar">
      <p>Price</p>
      <div className="progress"><span style={{ width: '80%' }}></span></div>
    </div>
    <div className="motivation-bar">
      <p>Comfort</p>
      <div className="progress"><span style={{ width: '70%' }}></span></div>
    </div>
    <div className="motivation-bar">
      <p>Convenience</p>
      <div className="progress"><span style={{ width: '90%' }}></span></div>
    </div>
    <div className="motivation-bar">
      <p>Speed</p>
      <div className="progress"><span style={{ width: '60%' }}></span></div>
    </div>
    <div className="motivation-bar">
      <p>Loyalty/Miles</p>
      <div className="progress"><span style={{ width: '85%' }}></span></div>
    </div>
  </div>
);

export default WMotivations;