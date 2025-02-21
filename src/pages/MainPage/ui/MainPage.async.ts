import {lazy} from 'react';

export const MainPageAsync = lazy(()=>new Promise(resolve => {
    //@ts-expect-error-ignore для имитации медленной загрузки страницы
    setTimeout(()=>{ resolve(import('./MainPage')); }, 1000)
}));