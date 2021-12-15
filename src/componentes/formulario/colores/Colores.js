import React from 'react'
import { Form ,Radio  } from 'antd';

export const Colores = () => {

    const colors = ['#39B0FF','#04B58B','#3E9C4B','#B6BC00','#E59100','#E55C00','#EE1F50','#D6198A','#B321F1','#48B5FE']    

    return (
        <div className='colores-container'>       

            <Form.Item 
            name= 'color'
            label= 'Color del tema'
            style={{display:'flex' ,justifyContent:'space-between',width:'100%'}}
            initialValue={'#48B5FE'}
            >
                <Radio.Group 
                style={{
                    display:'flex' ,
                    justifyContent:'space-between',
                    flexWrap: 'wrap',
                    width:'100%',
                    alignItems:'center'
                }}
                >
                
                {
                colors.map( ( color , index ) => (
                    <div key= {index}>
                        <Radio
                        className='radio'
                        style={{'--unnamed-color-circulo':color}}
                        value={color}
                        >            
                        </Radio>
                    </div>             
                ))
                }

                </Radio.Group>
            </Form.Item>
            
        </div>
    )
}
