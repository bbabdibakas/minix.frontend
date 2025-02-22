import {lazy} from 'react';

export const PostPageAsync = lazy(()=>new Promise(resolve => {
    //@ts-expect-error для имитации медленной загрузки страницы
    setTimeout(()=>{ resolve(import('./PostPage')); }, 1000)
}));