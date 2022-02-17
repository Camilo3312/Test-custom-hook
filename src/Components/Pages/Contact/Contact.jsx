import React from 'react'
import { Counter } from '../../Layout/Counter/Counter'
import { Footer } from '../../Layout/Footer/Footer'
import { Header } from '../../Layout/Header/Header'
import { Button } from '../../Ui/Button/Button'
import { Input } from '../../Ui/Input/Input'
import './Contact.css'

export const Contact = () => {

    const Action = (counter) => {    
        if(counter > 10) {

            console.log("Contador es mayor a 10");
        } 
    }

    return (
        <>
            <Header />
            <main className='main_contact'>  
                <div className='center_main_contact'>
                    
                    <div className='center_form_contact'>
                        <h1 className='subtitle'>Contact</h1>
                        <form className='form_contact'>
                            <Input style='txt_default' placeholder='Phone number'/>
                            <Input style='txt_default' placeholder='Email'/>
                            <Input style='txt_default' placeholder='Message'/>
                            <Button style='btn_default' value='Send' />
                        </form>
                    </div>
                    <Counter method={Action}/>
                </div>
            </main>
            <Footer />
        </>

    )
}
