import React from 'react'
import { Form, Input } from 'antd';

import { ExclamationCircleOutlined } from '@ant-design/icons';

import { style1 } from '../styles/styles';

export const UrlSpace = () => {
  return (
    <div className='url-space-container'>        
        <Form.Item
          label="URL del espacio (dirección web)"
          name="dominio"
          initialValue={""}
          // rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder="Ep: mi.dominio" suffix="dofleini.com"/>
        </Form.Item>

        <div className='logo-row-2'>
              <ExclamationCircleOutlined 
              style={{  fontSize: '17px', color: '#00000080' }}
              />
              <div>
              <p style={{...style1}} className='unnamed-character-style-2'>
                Puedes cambiar la URL de tu espacio (dirección web) en cualquier momento, pero por cortesía hacia tus compañeros de trabajo y otros usuarios de Plankton, porfavor no lo hagas muy seguido :)
              </p>
              <p style={{...style1}}>                  
                Nota: Si cambias la URL de tu espacio, Plankton automáticamente redireccionará desde la antigua dirección hacia la nueva. En cualquier caso, deberías asegurarte que tus compañeros sepan acerca del cambio porque la dirección anterior pasará a estar libre y puede ser usada por otro espacio en el futuro.
              </p>
              </div>

        </div>          
    </div>
  )
}
