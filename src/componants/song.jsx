import React from 'react';

import { Drawer, Form, Button, Col, Row, Input, Select,  Icon, message } from 'antd';
import  axios from "axios"
import Table11 from './table';
const { Option } = Select;

export default class DrawerForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { visible: false,
        songName:'',
        artist: '',
        movie: '',
        year: '',
    };
  }

  handleChange = (e)=>{

    if(e.currentTarget.name == "songName") this.setState({songName:e.currentTarget.value});
    if(e.currentTarget.name == "artist") this.setState({artist:e.currentTarget.value});
    if(e.currentTarget.name == "movie") this.setState({movie:e.currentTarget.value});
    if(e.currentTarget.name == "year") this.setState({year:e.currentTarget.value});
  }

  handleSubmit = (e)=>{
    const {songName, artist, movie, year} = this.state;
    if(!movie || !songName || !artist || !year){
      message.error("Please Enter Valid Details");
    }else{

     // axios.defaults.withCredentials = true;
      e.preventDefault();
      
      axios.post("https://ant-arun.herokuapp.com/", {
        songName: this.state.songName,
        artist: this.state.artist,
        movie: this.state.movie,
        year: this.state.year
      }, {
            headers: {
                 'Access-Control-Allow-Origin': "*",
                 'Access-Control-Allow-Method': "POST",   
                 'Access-Control-Allow-Origin': "Content-Type",   
                 'Content-Type': 'application/json',
            }
           }
         ).then(res=>{
           message.success("Song Added Successfully!!");
           setTimeout(window.location.pathname = "/", 2500);
       }).catch(err=>{
          message.error("Something Went Wrong!!");
       })
       this.onClose();
     }
 }


  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    //const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Button type="primary" onClick={this.showDrawer}>
          <Icon type="plus" /> Add New Song
        </Button>
        <Table11/>
        <Drawer
          title="add a song"
          width={800}
          onClose={this.onClose}
          visible={this.state.visible}
          bodyStyle={{ paddingBottom: 80 }}
        >

            <Form layout="vertical" hideRequiredMark>
            
              <Col span={10} style={{marginRight: 2}}>
                <Form.Item label="songName">
                    <Input name="songName" placeholder="Please enter songName"  onChange={(e)=>this.handleChange(e)}/>
                </Form.Item>
              </Col>
              <Col span={10} style={{marginRight: 2}}>
                <Form.Item label="Artist">
                    <Input name="artist" placeholder="Please enter Artis name"  onChange={(e)=>this.handleChange(e)} />
                </Form.Item>
              </Col>
              <Col span={10} style={{marginRight: 2}}>
                <Form.Item label="Movie">
                    <Input name="movie" placeholder="Please enter movie name" onChange={(e)=>this.handleChange(e)} />
                </Form.Item>
              </Col>
              <Col span={10} style={{marginRight: 2}}>
                <Form.Item label="Yers" >
                   <Input name="year" placeholder="Please enter years"  onChange={(e)=>this.handleChange(e)}/>
                </Form.Item>
              </Col>
              </Form>
                      
          <div
            style={{
              position: 'absolute',
              right: 0,
              bottom: 0,
              width: '100%',
              borderTop: '1px solid #e9e9e9',
              padding: '10px 16px',
              background: '#fff',
              textAlign: 'right',
            }}
          >
            <Button onClick={this.onClose} style={{ marginRight: 8 }}>
              Cancel
            </Button>
            <Button  type="primary" onClick={(e)=>this.handleSubmit(e)}>
              Submit
            </Button>
          </div>
        </Drawer>
      </div>
    );
  }
}
//const App = Form.create()(DrawerForm);

//ReactDOM.render(<App />, mountNode);