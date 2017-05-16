import React from 'react';
import { Link } from 'react-router';

/* Material UI*/
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };

  }
  

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

render() {


  const actions = <div>
      <FlatButton
        label="Назад"
        primary={true}
        onClick={this.handleClose}
      />
      <RaisedButton
        label="Увiйти"
        primary={true}
        onClick={this.handleClose}
      /></div>;


  return (
    <header>

      <nav>
        <ul>
        <img src='http://kpi.ua/themes/kpi/images/logo.png' style={{display: 'block', margin: '10px auto'}}/>

          <li>
            <Link to="/">Головна</Link>
          </li>
          <li>
            <Link to="/courses">Курси</Link>
          </li>
          <li>
            <Link to="/lecturers">Викладачі</Link>
          </li>
          <li>
            <Link to="/about">Тести</Link>
          </li>
          <li>
            <Link to="/">Матеріали</Link>
          </li>

          <RaisedButton style={{float: 'right'}} label="Увійти" onClick={this.handleOpen} />
        </ul>
      </nav>

      
        {console.log(this.state)}
        <Dialog
          title="Авторизацiя"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
        <TextField
      hintText="Логін"
      floatingLabelText="Логін"
    /><br />
         <TextField
      hintText="Пароль"
      floatingLabelText="Пароль"
      type="password"
    /><br />
        </Dialog>

    </header>
  )
}
}

export default Header;
