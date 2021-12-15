import React from 'react'
import { Form, Button, Upload, Avatar  } from 'antd';

import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Subir } from '../iconos/Subir';


export const Logo = () => {    
     
    

    return (
      <div className='logo-container'> 
          <div style={{height:'31px'}}>
            <b>Logo del espacio</b>
          </div>
          <div className='logo-row-1'>

              
                  <Avatar
                  size={67}
                  style={{       
                    backgroundColor: '#343C4A',
                    borderRadius: '34px',
                    opacity: '1', 
                    marginRight: '13px',
                    fontSize: '37px',
                    fontWeight: 'bold' 
                  }}   
                >
                  B
                </Avatar>

                
             

              <div className='logo-subir'>
                  <Form.Item
                  name="upload"
                  // getValueProps={(e)=>console.log(e)}
                >
                  <Upload name="logo" action="/upload.do" listType="picture" style={{width:'105px'}}>
                    <Button 
                    icon={ <Subir /> } 
                    style={{
                      borderRadius:'5px',
                      width:'105px',
                      color: '#00000080',
                      paddingLeft:'12px',
                      paddingRight: '7px',                      
                      }}>Subir logo</Button>
                  </Upload> 

                            

                </Form.Item>
              </div>   
         
            
          </div> 

          <div className='logo-row-2'>
            <ExclamationCircleOutlined 
              style={{ 
                fontSize: '17px', 
                color: '#00000080',
             }}
              />
            <div className='logo-parrafo'>
              <p> 
                    Este logo identificará tu espacio entre el resto.
              </p>
                
              <p className='sin-padding-bottom'> 
                    Preferiblemente sube una imagen .png igual o superior a 65px a 72ppp con fondo<br/>                    
                    transparente.
              </p>
            </div>
           
              
              
          </div>

      </div>
    )
}
