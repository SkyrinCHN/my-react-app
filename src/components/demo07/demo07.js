import React,{Component} from 'react';
import {Menu,Dropdown,Icon,message} from 'antd';
import './demo07.css';
const menu=(
  <Menu>
    <Menu.Item >
      <a href="" target="_blank" rel="noopener noreferrer">菜单一</a>
      </Menu.Item>
      <Menu.Item >
      <a href="" target="_blank" rel="noopener noreferrer">菜单二</a>
      </Menu.Item>
      <Menu.Item >
      <a href="" target="_blank" rel="noopener noreferrer">菜单三</a>
      </Menu.Item>
  </Menu>
)
const handelClick=({key})=>{
    message.info(`你点击了第${key}个选项`)
  }
const menu1=(
  <Menu onClick={handelClick}>
    <Menu.Item key='1' >
      <a href="#" target="_blank" rel="noopener noreferrer">菜单一</a>
      </Menu.Item>
      <Menu.Item  key='2'>
      <a href="#" target="_blank" rel="noopener noreferrer">菜单二</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key='3' disabled>
      菜单三disabled
      </Menu.Item>
  </Menu>
)
class Demo07 extends React.Component{
 
  render(){
    return(
      <div className='demo07'>
        <Dropdown overlay={menu}>
          <a href="#" className='ant-dropdown-link'>
          鼠标悬停<Icon type='down' />
          </a>
        </Dropdown>
        <br/><br/>
        <Dropdown overlay={menu1}>
          <a href="#" className='ant-dropdown-link'>
          鼠标悬停<Icon type='down' />
          </a>
        </Dropdown>
      </div>
    )
  }
}
export default Demo07;