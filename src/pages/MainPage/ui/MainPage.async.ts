import {lazy} from "react";

export const MainPageAsync = lazy(()=>new Promise(resolve => {
    //@ts-ignore для имитации медленной загрузки страницы
    setTimeout(()=>resolve(import('./MainPage')), 1000)
}));