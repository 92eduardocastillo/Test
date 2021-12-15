import { Form, Button  } from 'antd';


import { Logo } from './logo/Logo';
import { NameSpace } from './espacio-name/NameSpace';
import { UrlSpace } from './url-espacio/UrlSpace';
import { Personas } from './personas/Personas';
import { Colores } from './colores/Colores';
import { Privacidad } from './privacidad/Privacidad';





  

export const FormularioPage = ({Agregar}) => {

  

    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

      
  

    return (  
      <div className='formulario'>
        <h2 className='style-3'>Configuración</h2>

        <Form
            name="basic"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className='column'
            onValuesChange={Agregar}
            
        >

          <Logo />

          <NameSpace />

          <UrlSpace />                

          <Personas /> 

          <Colores/>  

          <Privacidad />      

          
            <div style={{
              display: 'flex',
              gap: '15px',
              flexWrap: 'wrap',
              marginBottom: '108px'
              }}>
            <Button 
            type="primary" 
            htmlType="submit"
            size='large'
            style={{borderRadius:'5px'}}
            >Guardar cambios
            </Button>
            <Button 
            htmlType="reset"
            size='large'
            style={{borderRadius:'5px'}}
            >Descartar
            </Button>
            </div>
           

        </Form>
      </div>
      
    )
}
