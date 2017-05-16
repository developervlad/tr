import React from 'react';
import { Link } from 'react-router';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


class Courses extends React.Component {

  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    console.log('PROPS', this.props.route.store.getState());
  }

    

render() {
  return (
    <div className="container courses">
      <h1>Курси</h1>
      <div>

 <div style={{width: '300px', float: 'left', marginRight: '30px'}}><Card>
    <CardHeader
      title="Михайло Згуровський"
      subtitle="Ректор, професор кафедри ТК"
      avatar="static/img/mrazIsuka.jpg"
    />
    <CardMedia
      overlay={<CardTitle title="Інформаційна безпека" subtitle="Введення в криптоаналіз" />}
    >
      <img src="static/img/course1.jpg" />
    </CardMedia>
    <CardTitle title="Лекцій: 26" subtitle="Матеріалів: 40" />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardActions>
      <FlatButton label="Детальніше" />
      <Link to="/video"><RaisedButton label="Розпочати" primary={true} /></Link>
    </CardActions>
  </Card>
</div>

<div style={{width: '300px', float: 'left', marginRight: '30px'}}>
  <Card style={{width: '300px'}}>
    <CardHeader
      title="Михайло Ткач"
      subtitle="Завкафедри, професор кафедри ТК"
      avatar="static/img/tkach.jpg"
    />
    <CardMedia
      overlay={<CardTitle title="Нейромережі" subtitle="Курс для початківців" />}
    >
      <img src="static/img/course2.jpg" />
    </CardMedia>
    <CardTitle title="Лекцій: 12" subtitle="Матеріалів: 8" />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardActions>
      <FlatButton label="Детальніше" />
      <RaisedButton label="Розпочати" primary={true} />
    </CardActions>
  </Card>
</div>

      </div>
    </div>
  )
}
}

export default Courses;
