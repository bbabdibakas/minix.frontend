import {ButtonHTMLAttributes} from 'react'
import * as styles from './AppButton.module.scss'

export enum AppButtonTheme {
    PRIMARY = 'primary',
    TEXT = 'text',
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: AppButtonTheme
}

const AppButton = (props: AppButtonProps) => {
    const {
        children,
        className,
        theme = AppButtonTheme.PRIMARY,
        ...otherProps
    } = props

    return (
        <button
            type="button"
            className={`${styles.AppButton} ${styles[theme]} ${className}`}
            {...otherProps}
        >
            {children}
        </button>
    )
}

export default AppButton