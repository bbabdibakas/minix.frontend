import {ButtonHTMLAttributes} from 'react'
import {classNames} from 'shared/lib/classNames/classNames';
import * as styles from './AppButton.module.scss'

export enum AppButtonTheme {
    PRIMARY = 'primary',
    TEXT = 'text',
    OUTLINED = 'outlined'
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: AppButtonTheme
}

export const AppButton = (props: AppButtonProps) => {
    const {
        children,
        className,
        theme = AppButtonTheme.PRIMARY,
        ...otherProps
    } = props

    return (
        <button
            type="button"
            className={classNames(styles.AppButton, {}, [styles[theme], className])}
            {...otherProps}
        >
            {children}
        </button>
    )
}