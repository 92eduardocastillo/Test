import {useState} from 'react';
import './App.css';

import { FormularioPage } from './componentes/formulario/FormularioPage';
import {Vista} from './componentes/vista/Vista'

function App() {
  const [form,setForm] = useState ({})

  const Agregar = (target) => {
    
    setForm({
        ...form,
        ...target
      })
    console.log('form: '+form.username)
  }
  
  return (
    <div className='app unnamed-character-style-1'>
      
        <div className='configuracion'>          
            <FormularioPage Agregar ={Agregar}/>        
        </div>
        <div className='vista'>          
            <Vista
            title = {form.username || 'Plankton - Mi Espacio'} 
            url = { form.dominio || 'mi_dominio.plankton.com/proyectos/plan_de_ventas' }
            color = {form.color || '#48b5fe' }
            />       
        </div> 

    </div>
  );
}

export default App;
