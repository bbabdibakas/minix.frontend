import * as styles from './AppPageLoader.module.scss'
import {AppLoader} from 'shared/ui/AppLoader/AppLoader';
import {classNames} from 'shared/lib/classNames/classNames';

interface AppPageLoaderProps {
    className?: string
}

export const AppPageLoader = (props: AppPageLoaderProps) => {
    const {
        className,
    } = props

    return (
        <div className={classNames(styles.AppPageLoader, {}, [className])}>
            <AppLoader/>
        </div>
    )
}