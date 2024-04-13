




import Card from 'react-bootstrap/Card';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
    const players ={
        
        width:"300px",
        height:"300px",
        
    }
    
  return (
    <div>
    <Card style={{ width: '18rem', margin: '10px' , justifyContent:"space-around"}}>
        
      <Card.Img style={players} src={imageUrl} />
      
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Team: {team}<br/>
          Nationality: {nationality}<br/>
          Jersey Number: {jerseyNumber}<br/>
          Age: {age}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Player;
