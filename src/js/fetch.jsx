import axios from 'axios';

export function getSocialLinks(setLinks, setLoading) {
    setLoading(true);
    axios.get('/data/data.json')
        .then(res => {
            if (res.data.social.length === 0) {
                console.log("No se pudieron cargar las redes sociales.");
            } else {
                setLinks(res.data.social);
            }
        })
        .catch(error => {
            console.error("Error al cargar las redes sociales:", error);
        })
        .finally(() => {
            setLoading(false);
        });
}
export function getLenguajes(setLinks, setLoading) {
    setLoading(true);
    axios.get('/data/data.json')
        .then(res => {
            if (res.data.lenguajes.length === 0) {
                console.log("No se pudieron cargar las redes sociales.");
            } else {
                setLinks(res.data.lenguajes);
            }
        })
        .catch(error => {
            console.error("Error al cargar las redes sociales:", error);
        })
        .finally(() => {
            setLoading(false);
        });
}
