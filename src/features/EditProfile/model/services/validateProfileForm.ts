import {Profile} from "entities/Profile";
import {ValidateProfileError} from "../types/EditProfileState";

export const validateProfileForm = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }

    const {
        name, username, bio,
    } = profile;


    const errors: ValidateProfileError[] = [];

    if (name && name.trim().length <= 3) {
        errors.push(ValidateProfileError.INCORRECT_NAME);
    }

    if (username && username.trim().length <= 3) {
        errors.push(ValidateProfileError.INCORRECT_USERNAME);
    }

    if (bio && bio.trim().length > 32) {
        errors.push(ValidateProfileError.INCORRECT_BIO);
    }

    return errors;
}