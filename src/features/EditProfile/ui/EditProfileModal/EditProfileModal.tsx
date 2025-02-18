import {AppModal} from "shared/ui/AppModal/AppModal";
import EditProfileForm from "../EditProfileForm/EditProfileForm";

interface EditProfileModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const EditProfileModal = (props: EditProfileModalProps) => {
    const {
        isOpen,
        onClose
    } = props

    return (
        <AppModal isOpen={isOpen} onClose={onClose}>
            <EditProfileForm onSuccess={onClose} />
        </AppModal>
    )
}

export default EditProfileModal