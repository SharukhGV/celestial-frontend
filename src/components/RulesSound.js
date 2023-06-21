import React from 'react';
import intro from './introcr.mp3'
import starRules from './starrules.mp3'

const RulesSound = () => {
  return (
    <div>
        <p><strong>Starting the Game</strong></p>
     <p><audio src={intro} type="audio/mp3" controls /></p> 
     <div>
     </div>
     <p><strong>Star Rules</strong></p>
      <audio src={starRules} type="audio/mp3" controls />

    </div>
  );
}

export default RulesSound;