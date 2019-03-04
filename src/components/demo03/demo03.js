import React,{Component} from 'react';
import {Button,Icon} from 'antd';
import './demo03.css'
// import {Link} from 'react-router-dom';

const ButtonGroup = Button.Group;
class Demo03 extends Component{
  
  render(){
    return(
      <div className='demo03'>
      <p>Basic</p>
        <ButtonGroup>
          <Button>Cancel</Button>
          <Button>OK</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button disabled>S</Button>
          <Button disabled>M</Button>
          <Button disabled>L</Button>
        </ButtonGroup>
        <p>With Icon</p>
        <ButtonGroup>
          <Button type='primary'>
            <Icon type='left' />Go Back
          </Button>
          <Button type='primary'>
          Go fowad
            <Icon type='right' />
          </Button>
        </ButtonGroup>
        <br/><br/>
        <ButtonGroup>
          <Button type='primary' icon='cloud' />
          <Button type='primary' icon='cloud-download'/>
        </ButtonGroup>
      </div>
    )
  }
}
export default Demo03 ;