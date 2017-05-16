import React from 'react';

import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';


function Lecturers() {
  return (
    <div className="container lecturers">
      <h1>Викладачі</h1>
      <div style={{width: '400px', border: 'solid 1px #d3d3d3', margin: '0 auto', textAlign: 'left'}}>

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
    <Divider />


      </div>
    </div>
  )
}

export default Lecturers;
