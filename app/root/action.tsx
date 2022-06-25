export const ChangeBackgroundColor = (backgroundColor: any) => {
    return {
        type: 'CHANGE_BACKGROUND_COLOR',
        payload: backgroundColor
    };
};
export const CameraImgs = (Imgs: any) => {
    return {
        type: 'Get_Imgs',
        payload: Imgs
    };
};
export const GetUser = (user: any) => {
    return {
        type: 'user',
        payload: user
    };
};
export const GetVolun = (volunteer: any) => {
    return {
        type: 'vol',
        payload: volunteer
    };
};
export const GetLn = (ln: any) => {
    return {
        type: 'ln',
        payload: ln
    };
};