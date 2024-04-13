




import Player from './player';
import players from './players';

const PlayersList = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {players.map((items, index) => (
        <Player players={index} {...items} />
      ))}
    </div>
  );
}

export default PlayersList;
