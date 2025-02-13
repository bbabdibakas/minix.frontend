import {ReactNode} from 'react';
import {AppPortal} from 'shared/ui/AppPortal/AppPortal';
import {AppButton, AppButtonTheme} from 'shared/ui/AppButton/AppButton';
import * as styles from './AppModal.module.scss';

interface AppModalProps {
    className?: string;
    children?: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

export const AppModal = (props: AppModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
    } = props;

    const onCloseHandler = () => {
        onClose()
    }

    return (
        <AppPortal>
            <div className={`${styles.AppModal} ${isOpen ? styles.opened : undefined} ${className}`}>
                <div className={styles.overlay}>
                    <div className={styles.content}>
                        <div className={styles.header}>
                            <AppButton
                                theme={AppButtonTheme.TEXT}
                                onClick={onCloseHandler}
                            >
                                Close
                            </AppButton>
                        </div>
                        <div className={styles.body}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </AppPortal>
    );
};