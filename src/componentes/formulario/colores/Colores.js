import React, { useState } from 'react'
import { Form ,Radio  } from 'antd';
import { SketchPicker } from 'react-color'

export const Colores = () => {

    const colors = ['#39B0FF','#04B58B','#3E9C4B','#B6BC00','#E59100','#E55C00','#EE1F50','#D6198A','#B321F1'] 
    
    const [ colorPicker , setColorPicker ] = useState( '#48B5FE' )
    const [showColorPicker , setShowColorPicker ] = useState( false )

    const handlerColor = updatedColor => {
        setColorPicker( updatedColor.hex )
    }
    
    const onClick = () => {
        showColorPicker
        ? setShowColorPicker (false)
        : setShowColorPicker (true)
    }



    return (
        <div className='colores-container'>       

            <Form.Item            
            name= 'color'
            label= 'Color del tema'
            style={{display:'flex' ,
            justifyContent:'space-between',
            width:'100%',
            marginBottom: '0px'
        }}
            
            >
                <Radio.Group
                style={{
                    display:'flex' ,
                    justifyContent:'space-between',
                    alignItems:'center',
                    flexWrap: 'wrap',
                    width:'100%'          
                }}
                >
                
                {
                colors.map( ( color , index ) => (
                    <div key= {index}>
                        <Radio                        
                        className='radio'
                        style={{'--unnamed-color-circulo':color}}
                        value={color}
                        disabled= {showColorPicker}
                        >            
                        </Radio>
                    </div>             
                ))
                }
                    <div>
                        <Radio            
                        className='radio'
                        style={{'--unnamed-color-circulo':colorPicker}}
                        value={colorPicker}
                        onClick={ onClick }
                        >            
                        </Radio>
                    </div>
                    
                    
                    

                </Radio.Group>
            </Form.Item>

            {
                        showColorPicker && 
                        (
                        <SketchPicker
                        color={colorPicker}
                        onChange = {handlerColor}
                        />
                        )
                    }
            
        </div>
    )
}
