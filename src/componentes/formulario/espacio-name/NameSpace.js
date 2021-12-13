import React from 'react'
import { Form, Input } from 'antd';

export const NameSpace = () => {
    return (
        <div className='name-space-container'>           
            <Form.Item
            label="Nombre del espacio"
            name="username"
            // rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input placeholder="Ep: Mi espacio de trabajo" name='aaaaaaaaaaaaaa'/>  
            </Form.Item>
        </div>
    )
}
