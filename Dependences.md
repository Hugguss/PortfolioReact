
> [!WARNING] **Esto ha sido pegado y copiado directamente del archivo package-lock.json**

> *Dependecias a instalar:*

```apache
"packages": {
    "": {
    "name": "portafolio",
    "version": "0.1.0",
    "dependencies": {
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.7.8",
    "nanoid": "^5.0.9",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.28.0",
    "react-scripts": "5.0.1",
    "react-transition-group": "^4.4.5",
    "sweetalert2": "^11.14.5",
    "web-vitals": "^2.1.4"
    },

    "devDependencies": {
    "@babel/plugin-proposal-private-property-in-object": "^7.21.11"
    }
```

> El apartado ***devDependencies*** me lo instalé porque netlify sino no me dejaba desplegar el proyecto, esta solucion fue gracias a la ayuda de mi compañero CHatGPT, por si te diese error y tuvieses que instalarlo, te dejo el comando 🙂:

```apache
npm install @babel/plugin-proposal-private-property-in-object --save-dev
```
