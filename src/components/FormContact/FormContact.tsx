"use client"

import './FormContact.css'
import { ChangeEvent, FormEvent, useState } from 'react'

interface UserContact{
    name:string,
    email:string,
    phone:string,
    message:string
}
export const FormContact=()=>{
    const [contact,setContact]= useState<UserContact>({
        name:'',
        email:'',
        phone:'',
        message:''
    })
    const [message,setMessage]= useState<string>('')

   const handleChange=(e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
       const {name,value}= e.target
       setContact(prev=>({
        ...prev,
        [name]:value
       }))
   }


   const handleSubmit=(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    const postContact=async()=>{
        try {
            const response= await fetch('http://localhost:4000/send-message',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(contact)
            })
            if(response.ok){
                const data = await response.json()
                setMessage(data.message)
            }
        } catch (error) {
            console.log(error)
        }
    }
    postContact()
   }


    return(
        <section className="container-form">
            <form onSubmit={handleSubmit}>
                <section>
              <label htmlFor="name">Nome e Cognome</label>
              <input type="text" 
              name='name'
              id='name'
              value={contact.name}
              onChange={handleChange}
              />

                </section>

                <section>
                    <label htmlFor="email">Email</label>
                    <input type="text"
                     name="email"
                     id="email"
                     value={contact.email}
                     onChange={handleChange} 
                      
                      />
                </section>
                <section>
                    <label htmlFor="">Telefono</label>
                    <input type="text"
                    name='phone'
                    id='phone'
                    value={contact.phone}
                    onChange={handleChange}
                    />
                </section>

                <section>
                    <label htmlFor="">Messaggio</label>
                    <textarea 
                    name="message"
                    id="message"
                    value={contact.message}
                    onChange={handleChange}
                    >
                    

                     </textarea>
                     <span>* Scrivici per essere ricontattato.</span>
                </section>
                <button type='submit'>Invia</button>
            </form>
            {message && <p>{message}</p> }
        </section>
    )
}