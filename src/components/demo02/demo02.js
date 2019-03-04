import React,{Component} from 'react';
// import {Button,Icon,Radio} from 'antd';
import {Button,Icon,Radio} from 'antd'
import './demo02.css';
import {Link} from 'react-router-dom';

class Demo02 extends React.Component{
  state={
    size:'large',
    loading:false,
    iconLoading:false,
  };

  handelSizeChange=(e)=>{
    this.seteState({size:e.target.value});
    console.log(e.target.value)
  }
  enterLoading=()=>{
    this.seteState({loading:true})
  }
  enterIconLoading=()=>{
    this.seteState({iconLoading:true})
  }

  render(){
    const size = this.state.size;
    return(
      <div className='demo02'>
        <p>单选按钮</p>
        <Radio.Group 
        value={size} 
        onChang={this.handelSizeChange}>
          <Radio.Button value='large'>Large</Radio.Button>
          <Radio.Button value='default'>Default</Radio.Button>
          <Radio.Button value='small'>Small</Radio.Button>
        </Radio.Group>
        <br/><br/>
        <p>四种按钮</p>
        <Button type='primary' size={size}>Primary</Button>
        <Button  size={size}>Normal</Button>
        <Button type='dashed' size={size}>Dashed</Button>
        <Button type='danger' size={size}>Danger</Button>
        <br/><br/>
        <p>带图标按钮</p>
        <Button type='primary' shape='circle' icon='download' size={size} />
        <Button type='primary' shape='round' icon='download' size={size}>DownLoad</Button>
        <Button type='primary' icon='download' size={size}>Download</Button>
        <br/><br/>
        <p>前进后退图标按钮</p>
        <Button.Group size={size}>
          <Button type='primary' shape='round'>
            <Icon type='left'  /> 返回
          </Button>
        </Button.Group>
        <Button type='primary' size={size}>
         前进 <Icon type='right' />
        </Button>
        <br/><br/>
        <p>不可用按钮</p>
        <Button type='danger' size={size}>Danger</Button>
        <Button type='danger' disabled size={size}>Danger(disabled)</Button>
        <br/>
        <Button type='dashed' size={size}>Dashed</Button>
        <Button type='dashed' disabled size={size}>Dashed(disabled)</Button>
        <br/>
        <p>幽灵按钮</p>
        <div style={{padding:'8px 8px 0 8px',background:'rgb(190,190,190)'}}>
          <Button ghost size={size}>Ghost</Button>
          <Button ghost disabled size={size}>Ghost(disabled)</Button>
        </div>
        <br/>
        <p>按钮点击进入加载状态</p>
        <Button type='primary' size={size} loading>loading
        </Button>
        <Button type='primary' size={size} loading={this.state.loading} onClick={this.enterLoading}>loading</Button>
        <Button type='danger' icon='poweroff' loading={this.state.loading} onClick={this.enterIconLoading} size={size}>loading</Button>
        <Button shape='circle' loading />
        <Button type='primary' shape='circle' loading></Button>
      </div>
    )
  }
}

export default Demo02;