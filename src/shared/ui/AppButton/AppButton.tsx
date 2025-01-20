import {ButtonHTMLAttributes} from 'react'
import * as styles from './AppButton.module.scss'

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
}

const AppButton = (props: AppButtonProps) => {
    const {
        children,
        className,
        ...otherProps
    } = props

    return (
        <button
            type="button"
            className={`${styles.AppButton} ${className}`}
            {...otherProps}
        >
            {children}
        </button>
    )
}

export default AppButton