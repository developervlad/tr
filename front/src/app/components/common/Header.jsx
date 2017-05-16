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

  login = () => {
    var username = this.refs.login.getValue(),
        password = this.refs.password.getValue();
    this.props.actions.login(username, password);
    this.handleClose();
  }

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
        onClick={this.login}
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

          {!this.props.store.getState().auth && 
          <RaisedButton style={{float: 'right'}} label="Увійти" onClick={this.handleOpen} />
        }
        </ul>
      </nav>

  
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
      ref="login"
    /><br />
         <TextField
      hintText="Пароль"
      floatingLabelText="Пароль"
      type="password"
      ref="password"
    /><br />
        </Dialog>

    </header>
  )
}
}

export default Header;
