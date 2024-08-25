import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider} from "react-router-dom";

import {router} from "./routs/router";
import {Provider} from "react-redux";
import {store} from "./store/store";

// Все виконати виключно реакт+рекдакс тулкіт
//
//
// https://pokeapi.co/
// сторінка всіх покемонів : сторінка на  якій зображені всі покемони з назвами та фото, по 20 покемонів на сторінці (пагінація)
// при кліку на покемона відобразити сторінку конкретного покемона
// Сторінка покемона - відобразити  інформацію про покемона
// ( abilities,stats,type, фото, та його форми (forms !!!)),  та кнопку додавання покемона до улюблених покемонів.
// Форми покемона повинні бути з кнопкою/кнопкою/клікабельні, при кліку на яку, нижчє основних характеристик,
// з'являється компонент з обраною формою та основними характеристиками форми (можн обрати самостійно,
// але фотографія форми обов'язкова)
// Сторінка улюблених покемонів відтворює всіх улюблених покемонів, відповідно при кліку на них відкривається сторінка покемона
// В проєкті реалізувати пошук конкретного покемона, пошук покемонів по типу, пошук по ability

// https://pokeapi.co/
// головна сторінка : сторінка на  якій зображені всі покемони з назвами та фото, по 20 на сторінці + пагінація
// при кліку на покемона відобразити сторінку конкретного покемона
// Сторінка покемона - відобразити  інформацію про покемона: abilities,stats,type, фото, та  forms(!!!)
// Форми покемона повинні бути кнопкою, при кліку на яку, відбувається перехід на сторінку
// з обраною формою та основними характеристиками форми
// В проєкті реалізувати пошук конкретного покемона за назвою,
// пошук покемонів по типу,
// пошук по ability


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <RouterProvider router={router}/>

    </Provider>
);