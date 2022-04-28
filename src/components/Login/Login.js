import React, { useState, useEffect } from 'react';
import Button from '../Button';
import TextBox from '../TextBox';

function Login(){

    const [message, setMessage] = useState();
    const [user, setUser] = useState();
    const [password, setPassword] = useState();

    useEffect(()=>{
        console.log('componente atualizado');
    },[message]);

    return(
       <div className='login'>
           <h1>Meu Login</h1>  <br />
           <TextBox 
                type='text' 
                label='Usuário' 
                placeholder='Digite um usuário'
                handleOnKeyPress={setUser}
            />
           <TextBox 
                type='password'
                label='Senha'
                placeholder='Digite sua senha'
                handleOnKeyPress={setPassword}
            />
           <Button 
                type='button' 
                name='send' 
                text='Enviar' 
                handleOnClick={setMessage}
                bsClass='primary'
            />
           <Button 
                type='button' 
                name='clear' 
                text='Limpar' 
                handleOnClick={setMessage}
                bsClass='success'
            />
           <br />
           <div>
               Mensagem: {message}
           </div>
           <div>
               Usuário: {user}
           </div>
           <div>
               Senha: {password}
           </div>
           
       </div>
    )
}
export default Login;







