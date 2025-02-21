import {EditProfileState} from './model/types/EditProfileState';
import {editProfileActions, editProfileReducer} from './model/slice/editProfileSlice';
import EditProfileModal from './ui/EditProfileModal/EditProfileModal';

export type {
    EditProfileState
}

export {
    editProfileActions,
    editProfileReducer,
    EditProfileModal
}