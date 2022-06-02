# MorfiStore

## Descripción

Este repositorio contiene el proyecto desarrollado durante el curso de `React JS` de `Coderhouse`.

La aplicación consiste en un ecommerce en el cual se puede filtrar los productos de acuerdo a categorías, y acceder a ver el detalle de cada producto. Los mismos pueden ser agregados al carrito para luego completar un formulario simulando un proceso de compra completo.

Tanto el listado de categorías, como los productos y las órdenes generadas se almacenan en `Firebase`.

Puede visitarse el deploy del proyecto en [https://coder-vivas.vercel.app/](https://coder-vivas.vercel.app/)

![GIF de muestra.](/public/coder-final.gif "Vista del proyecto.")

## Tecnologías utilizadas

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white) ![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase) ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

* [React JS](https://reactjs.org/)
* [React Router Dom](https://reactrouter.com/)
* [Material UI](https://mui.com/)
* [Firebase](https://firebase.google.com/)
* [Vercel](https://vercel.com/) (para deploy)

## Ejecutar el proyecto

Para ejecutar el proyecto, el mismo puede descargarse como .zip o clonarlo con:

```
git clone https://github.com/GonzaloVivas/coder-vivas.git
cd coder-vivas
```

Instalar las dependencias:

```
npm install
```

Luego iniciar el servidor con:

```
npm start
```

El proyecto estará corriendo en `http://localhost:3000`

## Consideraciones adicionales

### MaterialUI
Se escogió Material UI como librería de componentes para agilizar el proceso de desarrollo y estilado de la aplicación, aprovechando la posibilidad de extender los componentes mediante el uso de themes.
### Firebase
En Firebase se almacenaron, además del listado de productos y las órdenes generadas, las categorías correspondientes a los productos.
### LocalStorage
Se utilizó LocalStorage para persistir el carrito de los usuarios en sus dispositivos en el caso de que no finalicen el flujo de compra para mejorar la experiencia de uso.
### Control de Stock
Se implementó control de stock en dos puntos del flujo de compra para evitar que un usuario pueda adquirir una cantidad mayor de un producto de la que se encuentre disponible:
* Al enviar la orden a Firebase, comparando la cantidad de items a adquirir con la disponible en la base de datos.
* Cuando el usuario ya tiene un producto en el carrito y vuelve a acceder al mismo para agregar más, la cantidad máxima que podrá agregar corresponde al stock original menos la cantidad ya existente el carrito.
### Dark/Light Modes
La aplicación se inicia por defecto en modo oscuro por preferencia personal, pero es posible alternar entre ambos modos desde el botón ubicado en el NavBar en la versión de escritorio, o en el Drawer en la versión mobile.

Si bien no fue implementado, podría incorporarse en el futuro la posibilidad de detectar la preferencia del usuario mediante la media query `prefers-color-scheme` (MUI provee un hook para accederla fácilmente) y en caso de que el usuario cambie a algún modo en particular persistir esta configuración en LocalStorage.