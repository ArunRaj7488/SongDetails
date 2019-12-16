import React from 'react';
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker, Icon } from 'antd';

const { Option } = Select;

export default class DrawerForm extends React.Component {
  state = { visible: false };

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
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
                <Button type="primary" onClick={this.showDrawer}>
                        <Icon type="plus" /> New account
                </Button>
                <Drawer title="Add new data" width={720}  onClose={this.onClose} visible={this.state.visible}
                        bodyStyle={{ paddingBottom: 80 }}>
          <Form layout="vertical" hideRequiredMark>
            
                    <Col span={12}>
                        <Form.Item label="Song">
                        {getFieldDecorator('song', {
                            rules: [{ required: true, message: 'Please enter song name' }],
                        })(<Input placeholder="Please enter song name" />)}
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Title">
                        {getFieldDecorator('title', {
                            rules: [{ required: true, message: 'Please enter title of song' }],
                        })(<Input placeholder="Please enter title of song" />)}
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Artist">
                        {getFieldDecorator('artist', {
                            rules: [{ required: true, message: 'Please enter artist' }],
                        })(<Input placeholder="Please enter artist" />)}
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item label="Movie">
                        {getFieldDecorator('movie', {
                            rules: [{ required: true, message: 'Please enter movie name' }],
                        })(<Input placeholder="Please enter movie name" />)}
                        </Form.Item>
                    </Col>

                    </Form>
           <div
            style={{position: 'absolute',right: 0,bottom: 0,width: '100%',borderTop: '1px solid #e9e9e9',
              padding: '10px 16px',background: '#fff',textAlign: 'right',}}>
            <Button onClick={this.onClose} style={{ marginRight: 8 }}>
              Cancel
            </Button>
            <Button onClick={this.onClose} type="primary">
              Submit
            </Button>
          </div>
        </Drawer>
     </div>
    );
  }
}
