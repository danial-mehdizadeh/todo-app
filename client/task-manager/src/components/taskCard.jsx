import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function GroupExample(props) {
    const {member} = props
  return (
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>{member.name}</Card.Title>
          <Card.Text>
            member?.github<a href={}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Auth</small>
        </Card.Footer>
      </Card>
  );
}

export default GroupExample;