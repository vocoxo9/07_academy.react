import { toast } from "react-toastify";

export const topCenterAlert = (message) => {
    toast(message, { position : 'top-center'});
}

export const bottomCenterAlert = (message) => {
    toast(message, {position : "bottom-center"});
}

export const successAlert = (message) => {
    toast.success(message, {position : 'top-center'});
}

export const errorAlert = (message) => {
    toast.error(message, {position : 'top-center'});
}