import { toast } from "react-toastify";
import Swal from "sweetalert2";

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

export const successSweetAlert = (message) => {
    Swal.fire({
        title: message,
        icon: "success"
      });
}

export const errorSweetAlert = (message) => {
    Swal.fire({
        title: message,
        icon: "error"
      });
}