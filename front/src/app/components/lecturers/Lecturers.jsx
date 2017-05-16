import React from 'react';

import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

import { connect } from 'react-redux';

/* Material UI*/
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


class Lecturers extends React.Component {
  constructor(props) {
    super(props);

     this.state = {
      open: false,
    };


    /*

     <List>
      <Subheader>Кафедра ТК</Subheader>
      <ListItem
        primaryText="Михайло Згуровський"
        leftAvatar={<Avatar src="static/img/mrazIsuka.jpg" />}
  
      />
      <ListItem
        primaryText="Михайло Ткач"
        leftAvatar={<Avatar src="static/img/tkach.jpg" />}
   
      />
      <Subheader>Кафедра ОТ</Subheader>
      <ListItem
        primaryText="Михайло Згуровський"
        leftAvatar={<Avatar src="static/img/mrazIsuka.jpg" />}
  
      />
      <ListItem
        primaryText="Михайло Ткач"
        leftAvatar={<Avatar src="static/img/tkach.jpg" />}
   
      />
      <Subheader>Кафедра АУТС</Subheader>
      <ListItem
        primaryText="Михайло Згуровський"
        leftAvatar={<Avatar src="static/img/mrazIsuka.jpg" />}
  
      />
      <ListItem
        primaryText="Михайло Ткач"
        leftAvatar={<Avatar src="static/img/tkach.jpg" />}
   
      />
    </List>

    */
  }

 componentDidMount() {
    this.props.route.actions.getLectors();
  }

    handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  login = () => {
    
    this.props.route.actions.addLector(this.refs.id.getValue(), this.refs.name.getValue(), this.refs.faculty.getValue(), this.refs.cafedra.getValue());
    this.handleClose();
    this.props.route.actions.getLectors();
  }

  render() {
  return (
    <div className="container lecturers">

{this.props.route.store.getState().auth == 'admin' &&
          <RaisedButton style={{float: 'right'}} label="Додати викладача" onClick={this.handleOpen} />
        }
      

      <h1>Викладачі</h1>
      <div style={{width: '400px', border: 'solid 1px #d3d3d3', margin: '0 auto', textAlign: 'left'}}>

      <List>
      
 {this.props.route.store.getState().lectors &&
      this.props.route.store.getState().lectors.map((item)=>{
        return <ListItem
        primaryText={item.name + ' (' + item.faculty + ', ' + item.cafedra + ')' }
  
      />;
      })
    }

      
    
    </List>
    <Divider />


      </div>


<Dialog
          title="Створення користувача у ролі викладача"
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
      hintText="Ім'я"
      floatingLabelText="Ім'я"
      ref="name"
    /><br />
        <TextField
      hintText="Факультет"
      floatingLabelText="Факультет"
      ref="faculty"
    /><br />
     <TextField
      hintText="Кафедра"
      floatingLabelText="Кафедра"
      ref="cafedra"
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

export default connect((state)=>{return state})(Lecturers);
