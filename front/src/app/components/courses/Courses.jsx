import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

/* Material UI*/
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';


class Courses extends React.Component {

  constructor(props) {
    super(props);

     this.state = {
      open: false,
    };


/*
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
</div> */

  }
  
  componentDidMount() {
    this.props.route.actions.getCourses();
  }

    handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  login = () => {
    
    this.props.route.actions.addCourse(this.refs.id.getValue(), this.refs.name.getValue(), this.refs.description.getValue());
    this.handleClose();
    this.props.route.actions.getCourses();
  }

render() {
  return (
    <div className="container courses">
{this.props.route.store.getState().auth == 'lector' &&
<RaisedButton style={{float: 'right'}} label="Додати лекцію" onClick={this.handleOpen} />
}

      <h1>Курси</h1>
      <div>



    {this.props.route.store.getState().courses &&
      this.props.route.store.getState().courses.map((item)=>{
        return <div style={{width: '300px', float: 'left', marginRight: '30px'}}><Card>
    <CardMedia
      overlay={<CardTitle title={item.name} />}
    >
      <img src="static/img/course1.jpg" />
    </CardMedia>
    <CardText>
     {item.description}
    </CardText>
    <CardActions>
      <Link to="/video"><RaisedButton label="Розпочати" primary={true} /></Link>
    </CardActions>
  </Card>
</div>;
      })
    }

      </div>


<Dialog
          title="Створення лекції"
          actions={<div>
      <FlatButton
        label="Назад"
        primary={true}
        onClick={this.handleClose}
      />
      <RaisedButton
        label="Створити"
        primary={true}
        onClick={this.login}
      /></div>}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
        <TextField
      hintText="Назва"
      floatingLabelText="Назва"
      ref="name"
    /><br />
        <TextField
      hintText="Опис"
      floatingLabelText="Опис"
      ref="description"
    /><br />
  
     <TextField
      hintText="id"
      floatingLabelText="id"
      ref="id"
    /><br />
        </Dialog>

    </div>
  )
}
}

export default connect((state)=>{return state})(Courses);
