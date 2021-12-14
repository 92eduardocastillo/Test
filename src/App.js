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
            title = {form.username || 'aa'} 
            url = { form.dominio || 'll' }
            color = {form.color}
            />       
        </div> 

    </div>
  );
}

export default App;
