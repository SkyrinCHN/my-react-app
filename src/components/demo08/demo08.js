import React,{Component} from 'react';
import './demo08.css';
import {Button,Input,message,Form,Icon} from 'antd'

export default class Demo08 extends Component{
  state={
    uName:'',
    uPwd:'',
    }
    getUserName=(e)=>{
      this.setState({
         uName:e.target.value
        // e.target.value:uName
      })
      // message.info(this.state.uName)
      // alert(this.state.uName)
      message.info(e.target.value)
    }
    handelSubmit=()=>{
      fetch('http://skyrinbyliu.applinzi.com/getImages')
      .then(res=>res.json())
      .then(data=>{
        alert(data)
      })
    }
  render(){
    return(
      <div className='login'>
      <p>这是Demo08</p>
      <Form>
        <Input value={this.state.uName} onChange={this.getUserName} placeholder='Username'></Input>
        <br/>
        <Button onClick={this.handelSubmit}>请求</Button>
      </Form>
      </div>
      
    )
  }
 
 
}