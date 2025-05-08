import { toast } from 'react-toastify';

const defaultConfig = {
    position: 'top-center',
    autoClose: 3000
}
export const topCenterAlert = (msg) => {
    toast(msg, { position: 'top-center' });
}

export const bottomCenterAlert = (msg) => {
    toast(msg, { position: 'bottom-center' });
}

export const successAlert = (msg) => {
    toast.success(msg, defaultConfig);
}

export const errorAlert = (msg) => {
    toast.error(msg, defaultConfig);
}

export const infoAlert = (msg) => {
    toast.info(msg, defaultConfig);
}

export const warningAlert = (msg) => {
    toast.warn(msg, defaultConfig);
}