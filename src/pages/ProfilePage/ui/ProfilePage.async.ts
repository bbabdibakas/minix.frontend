import {lazy} from "react";

export const ProfilePageAsync = lazy(()=>new Promise(resolve => {
    //@ts-ignore для имитации медленной загрузки страницы
    setTimeout(()=>resolve(import('./ProfilePage')), 1000)
}));