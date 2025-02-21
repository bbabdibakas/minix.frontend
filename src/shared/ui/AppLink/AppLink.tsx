import {Link, LinkProps} from 'react-router';
import * as styles from './AppLink.module.scss'

interface AppLinkProps extends LinkProps {
    className?: string
}

const AppLink = (props: AppLinkProps) => {
    const {
        to,
        children,
        className,
        ...otherProps
    } = props

    return (
        <Link
            to={to}
            className={`${styles.AppLink} ${className || ''}`}
            {...otherProps}
        >
            {children}
        </Link>
    )
}

export default AppLink