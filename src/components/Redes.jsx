import '../css/style.css'; 
import { useState, useEffect } from 'react';
import { getSocialLinks } from '../js/fetch.jsx';
import { nanoid } from 'nanoid';

export default function Redes () {
    const [socialLinks, setSocialLinks] = useState([]);
    const [loading, setLoading] = useState(false);
//Primer map para crear un id unico para cada objeto del json
    useEffect(() => {
        getSocialLinks((socials) => {
            const socialsWithIds = socials.map((social) => ({
                ...social,
                id: nanoid(),
            }));
            setSocialLinks(socialsWithIds);
        }, setLoading);
    }, []);

    if (loading) {
        return <p>Cargando redes sociales...</p>;
    }

    return (
        <section className="redes">
                <h2>Social Media</h2>
                <article className='cont_social'>
        {/*Segundo map para cargar en el html los datos del json*/}
                    {socialLinks.map((social) => (
                        <a key={social.id} className='card_social' href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                            <h1>{social.name}</h1>
                            <i className= {"bi bi-" + social.icon}></i>
                        </a>
                    ))}
                </article>
        </section>
    );
};

