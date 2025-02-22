import {classNames} from 'shared/lib/classNames/classNames';
import * as styles from './AppLoader.module.scss'

interface AppLoaderProps {
    className?: string
}

export const AppLoader = (props: AppLoaderProps) => {
    const {
        className,
    } = props

    return (
        <div className={classNames(styles.AppLoader, {}, [className])}/>
    )
}