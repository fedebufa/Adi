"use client";

import './ServiceCard.css';
import { FC } from "react";
import Image from 'next/image';

interface ServiceCardProps {
  img: string;
  title: string;
  description: string;
}

export const ServiceCard: FC<ServiceCardProps> = ({ img, title, description }) => {
  return (
    <section className="container-service-card">
      <Image src={img} alt="Service Image" width={500} height={300} />
      <h3>{title}</h3>
      <p>{description}</p>
    </section>
  );
};
