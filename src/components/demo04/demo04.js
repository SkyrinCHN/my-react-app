import React,{Component} from 'react';
import {Row,Col} from 'antd';
import './demo04.css';

class Demo04 extends  React.Component {
  render(){
    return(
      <div >
        <Row >
          <Col span={12} className='demo04'>
            col-12
          </Col>
          <Col span={12} className='demo04'>
            col-12
          </Col>
        </Row>
        <Row className='demo04'>
          <Col span={8}>col-8</Col> 
          <Col span={8}>col-8</Col>
           <Col span={8}>col-8</Col>
        </Row>
        <div className='gutter-example'>
          <Row gutter=' xs: 8, sm: 16, md: 24, lg: 32'>
            <Col className='gutter-row' span={6}>
              <div className='gutter-box'>col-6</div>
            </Col>
            <Col className='gutter-row' span={6}>
              <div className='gutter-box'>col-6</div>
            </Col>
            <Col className='gutter-row' span={6}>
              <div className='gutter-box'>col-6</div>
            </Col>
            <Col className='gutter-row' span={6}>
              <div className='gutter-box'>col-6</div>
            </Col>
          </Row>
        </div>

        <div>
          <Row className='demo04'>
            <Col span={18} push={6}>col-18 col-push-6</Col>
            <Col span={6} pull={18}>col-6 col-pull-6</Col>
          </Row>
        </div>
        <div>
          <p>左对齐</p>
          <Row className='demo04' gutter={8} type='flex' justify='start'>
            <Col span={4}> 
            <div className='gutter-box'>col-4</div>
            </Col>
             <Col span={4}> 
            <div className='gutter-box'>col-4</div>
            </Col>
             <Col span={4}> 
            <div className='gutter-box'>col-4</div>
            </Col>
             <Col span={4}> 
            <div className='gutter-box'>col-4</div>
            </Col>
          </Row>
        </div>
         <div>
          <p>居中对齐</p>
          <Row className='demo04' gutter={8} type='flex' justify='center'>
            <Col span={4}> 
            <div className='gutter-box'>col-4</div>
            </Col>
             <Col span={4}> 
            <div className='gutter-box'>col-4</div>
            </Col>
             <Col span={4}> 
            <div className='gutter-box'>col-4</div>
            </Col>
             <Col span={4}> 
            <div className='gutter-box'>col-4</div>
            </Col>
          </Row>
        </div>
         <div>
          <p>右对齐</p>
          <Row className='demo04' gutter={8} type='flex' justify='end'>
            <Col span={4}> 
            <div className='gutter-box'>col-4</div>
            </Col>
             <Col span={4}> 
            <div className='gutter-box'>col-4</div>
            </Col>
             <Col span={4}> 
            <div className='gutter-box'>col-4</div>
            </Col>
             <Col span={4}> 
            <div className='gutter-box'>col-4</div>
            </Col>
          </Row>
        </div>
         <div>
          <p>space-between</p>
          <Row className='demo04' gutter={8} type='flex' justify='space-between'>
            <Col span={4}> 
            <div className='gutter-box'>col-4</div>
            </Col>
             <Col span={4}> 
            <div className='gutter-box'>col-4</div>
            </Col>
             <Col span={4}> 
            <div className='gutter-box'>col-4</div>
            </Col>
             <Col span={4}> 
            <div className='gutter-box'>col-4</div>
            </Col>
          </Row>
        </div>
         <div>
          <p>space-around</p>
          <Row className='demo04' gutter={8} type='flex' justify='space-around'>
            <Col span={4}> 
            <div className='gutter-box'>col-4</div>
            </Col>
             <Col span={4}> 
            <div className='gutter-box'>col-4</div>
            </Col>
             <Col span={4}> 
            <div className='gutter-box'>col-4</div>
            </Col>
             <Col span={4}> 
            <div className='gutter-box'>col-4</div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}
export default Demo04;