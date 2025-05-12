"use client"
import './ServiceCard.css'
import { FC } from "react"





interface ServiceCardProps{
    img:string,
    title:string,
    description:string
}


export const ServiceCard:FC<ServiceCardProps>=({img,title,description})=>{
    return(
        <section className="container-service-card">
          <img src={img} alt="" />
          <h3>{title}</h3>
          <p>{description}</p>
        </section>
    )
}