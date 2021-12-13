import React from 'react'
import { Form ,Radio  } from 'antd';

import { ExclamationCircleOutlined } from '@ant-design/icons';

export const Personas = () => {

    const cantidadPersonas = ['Sólo yo','2 - 10','11 - 25', '11 - 25', '26 - 50', '51 - 100' , '500 +']

    return (
        <div className='personas-container'>
        
            <Form.Item 
                label="¿Cuántas personas trabajarán contigo, incluyéndote a ti?" 
                name="personas"
                
            >
                    
                    <Radio.Group
                    size='large'
                    defaultValue="3" 
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        alignItems: 'center'}}
                        >

                        <div className='persona-group'>
                        {
                        cantidadPersonas.map( ( texto , index ) => (
                            <div key={index}>
                                <Radio.Button
                                style={{borderRadius: '5px', 
                                height: '46px',
                                padding: '0px 9px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontSize: '14px',
                                fontWeight: 'normal',
                                fontFamily: 'Fira Sans'                                                             
                            }}
                                className='personas-item' 
                                value={index} 
                                > {texto} 
                                </Radio.Button>
                            </div>
                            ))
                        }

                </div>
                       
                    </Radio.Group>


            </Form.Item> 
              

            <div className='logo-row-2'>
              <ExclamationCircleOutlined 
              style={{ fontSize: '17px', color: '#00000080' }}
              />
              <div>
              <p className='unnamed-character-style-2'>
              Este logo identificará tu espacio entre el resto.
              </p>
              <p className='unnamed-character-style-2'>                  
              Preferiblemente sube una imagen .png igual o superior a 65px a 72ppp con fondo transparente.
              </p>
              </div>

        </div>
     
        </div>
    )
}
