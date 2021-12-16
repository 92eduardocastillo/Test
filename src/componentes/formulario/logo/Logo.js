import React, { useState } from 'react'
import { Form, Button, Upload, Avatar  } from 'antd';

import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Subir } from '../iconos/Subir';


export const Logo = () => {    
     

  const [fileList, setFileList] = useState();

  const [file, setFile] = useState();

  const onChange = ({ fileList: newFileList }) => {
    // if(newFileList.length===2){
    //   newFileList.shift()
    //   console.log(newFileList)
    // }    
      console.log(newFileList);        
        setFileList(newFileList);
        setFile(newFileList)
  };

  const onPreview = async file => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    console.log(image);
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };
    

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
                    marginRight: '13px',
                    fontSize: '37px',
                    lineHeight: '34px',
                    fontWeight: 'bold' 
                  }}   
                >
               {/* { (!fileList)
               ? (<>B</>)
               : (<p>{fileList[0].thumbUrl}<p/>)            
              } */}
                </Avatar>

                
             

              <div className='logo-subir'>
                  <Form.Item
                  name="upload"
                  // getValueProps={(e)=>console.log(e)}
                >
                  <Upload 
                  name="logo" 
                  action="" 
                  listType="picture" 
                  // listType="picture-card"
                  fileList={fileList}
                  onChange={onChange}
                  onPreview={onPreview}
                  style={{width:'105px'}}>
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
