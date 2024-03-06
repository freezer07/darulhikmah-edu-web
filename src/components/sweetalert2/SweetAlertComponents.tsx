import { FC } from "react";
import { Action } from "../../reducer/contactsReducer";
import Swal from "sweetalert2";

export interface SweetAlertProps {
  title: string;
  text?: string;
  icon?: any;
  showCancelButton?: boolean;
  confirmButtonColor?: string;
  cancelButtonColor?: string;
  confirmButtonText?: string;
}

export interface ResponseAlert {
  icon?: any;
  title?: string;
  text?: string;
  showConfirmButton?: boolean;
  timer?: number;
}

export const SwalAlert = (props: SweetAlertProps) => {
  // const swalWithBootstrapButtons = Swal.mixin({
  //   customClass: {
  //     confirmButton: "btn btn-success",
  //     cancelButton: "btn btn-danger",
  //   },
  //   buttonsStyling: false,
  // });

  return Swal.fire({
    title: props?.title || "Are you sure?",
    text: props?.text || "You won't be able to revert this!",
    icon: props?.icon || "warning",
    showCancelButton: props?.showCancelButton || true,
    confirmButtonColor: props?.confirmButtonColor || "#3085d6",
    cancelButtonColor: props?.cancelButtonColor || "#d33",
    confirmButtonText: props?.confirmButtonText || "Yes, delete it!",
  });
};

export const SuccessAlert = (props?: ResponseAlert) => {
  return Swal.fire({
    title: props?.title || "Success!",
    text: props?.text || "Your action has been success.",
    icon: props?.icon || "success",
    timer: props?.timer || 2000,
    showConfirmButton: props?.showConfirmButton || false,
  });
};

export const WarningAlert = (props?: ResponseAlert) => {
  return Swal.fire({
    title: props?.title || "Warning!",
    text: props?.text || "Some thing went wrong.",
    icon: props?.icon || "warn",
    timer: props?.timer || 2000,
    showConfirmButton: props?.showConfirmButton || false,
  });
};

export const CancelAlert = (props?: ResponseAlert) => {
  return Swal.fire({
    title: props?.title || "Cancel!",
    text: props?.text || "Your action has been cancel.",
    icon: props?.icon || "error",
    timer: props?.timer || 2000,
    showConfirmButton: props?.showConfirmButton || false,
  });
};

export const ErrorAlert = (props?: ResponseAlert) => {
  return Swal.fire({
    title: props?.title || "Something went wrong!",
    text: props?.text || "Please try again later.",
    icon: props?.icon || "error",
    timer: props?.timer || 2000,
    showConfirmButton: props?.showConfirmButton || false,
  });
};
