import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import DrawerForm from './check'
import axios from 'axios';

import { Table, Divider, Tag } from 'antd';

const columns = [
  {
    title: 'Song Name',
    dataIndex: 'songName',
    key: 'songName',
    
  },
  {
    title: 'Artist',
    dataIndex: 'artist',
    key: 'artist',
  },
  {
    title: 'Movie',
    dataIndex: 'movie',
    key: 'movie',
  },
  {
    title: 'Year',
    dataIndex: 'year',
    key: 'year',
  },
 
];

const data = [
  {
    key: '1',
    songName: 'blue eys',
    artist: "hony Sing",
    movie: 'Love Dose',
    year: 2013,
  },
  {
    key: '2',
    songName: 'blue eys',
    artist: "hony Sing",
    movie: 'Love Dose',
    year: 2013,
  },
  {
    key: '3',
    songName: 'blue eys',
    artist: "hony Sing",
    movie: 'Love Dose',
    year: 2013,
   },
];

class Table11 extends Component {
  constructor(props){
    super(props);
    this.state={
        data: []
    };
  }

  componentDidMount(){
    axios.get("https://ant-arun.herokuapp.com/").then((data)=>{
      console.log(data);
      this.setState({data})
    }).catch(err => console.log(err))
  };

  render() { 
    return ( <Table columns={columns}  pagination={false} dataSource={this.state.data.data} /> );
  }
}
 
export default Table11 ;