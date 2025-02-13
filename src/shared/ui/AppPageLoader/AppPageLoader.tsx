import * as styles from './AppPageLoader.module.scss'
import {AppLoader} from "shared/ui/AppLoader/AppLoader";

interface AppPageLoaderProps {
    className?: string
}

export const AppPageLoader = (props: AppPageLoaderProps) => {
    const {
        className,
    } = props

    return (
        <div className={`${styles.AppPageLoader} ${className}`}>
            <AppLoader/>
        </div>
    )
}