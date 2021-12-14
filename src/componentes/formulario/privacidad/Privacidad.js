import React from 'react'
import { Form ,Radio  } from 'antd';

export const Privacidad = () => {

    const botonStyle = { height: '97px', borderRadius: '5px'}

    return (
        
        <div className='privacidad-container'>
        
            <Form.Item wrapperCol={{ offset: 0, span: 24 }}
            label='Privacidad del espacio'
            name='privacidad'
            initialValue={"privado"}
            >

                <Radio.Group
                defaultValue="1"
                size={'large'}
                style={{
                    display:'flex',
                    justifyContent:'space-around',
                    gap: '13px'
                }}
                >
                
                
                    <div style={{position: 'relative',width:'299px'}}>
                            
                            <Radio.Button 
                            value="privado"
                            style={botonStyle}
                            className='privacidad-boton'
                            >
                            <p style={{lineHeight: '20px'}}>El contenido será visible sólo para tí y los miembros de tu Organización.</p>                        
                            </Radio.Button>                   
                        
                            <Radio                       
                                value="privado"  style={{position:'absolute',zIndex:'2',top:'14px',left:'11px'}}
                                >Privado
                            </Radio>                    

                    </div>

                    <div style={{position: 'relative',width:'299px'}}>
                        
                        <Radio.Button 
                        value="publico"
                        style={botonStyle}
                        className='privacidad-boton'
                        >
                        <p style={{lineHeight: '20px', fontSize:'14px', fontFamily:'Fira Sans'}}>Cualquiera con el vínculo podrá ver la actividad de tu Organización</p>                        
                        </Radio.Button>                   
                    
                        <Radio                       
                            value="publico"  style={{position:'absolute',zIndex:'2',top:'14px',left:'11px'}}
                            >Público
                        </Radio>                    

                    </div>
             

                </Radio.Group>
            </Form.Item>

        </div>

    )   
}
