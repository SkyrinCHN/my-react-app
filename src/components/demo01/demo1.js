import React,{Component} from 'react'
import './demo01.css'
import {Button} from 'antd'
import {Link} from 'react-router-dom';
class Demo01 extends Component{
  render(){
    return(
      <div className='demo01'>
        <div>
        <Button type='primary'>primary按钮</Button>
          <Button type='danger'>danger按钮</Button>
          <Button type='Dashed'>Dashed按钮</Button>
          <Button >default按钮</Button>
        </div>
        <div>
          <Button type='primary' shape='circle' icon='search'/>
          <br/>
          <Button type='primary' icon='search'>search</Button>
          <br/>
          <Button shape='circle' icon='search' />
          <br/>
          <Button icon="search">search</Button>
          <br/>
          <Button icon='search' shape='circle' />
          <br/>
          <Button type="dashed"  icon='search'>search</Button>
        </div>
       </div>
    )
  }
}

export default Demo01;