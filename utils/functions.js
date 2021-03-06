import { toast } from "react-toastify";
import Spin from "../public/assets/icons/Spin.svg";

export const hexTorgba = (color, alpha) => {
  if (alpha === undefined) alpha = 1;
  const r = parseInt(color.substr(1, 2), 16);
  const g = parseInt(color.substr(3, 2), 16);
  const b = parseInt(color.substr(5, 2), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const createGradientbackground = (from, to) => {
  return `linear-gradient(to right bottom, ${from},${to})`;
};

export const createGradientText = (from, to) => {
  return `linear-gradient(to right bottom,${hexTorgba(from, 0.85)}, 
  ${hexTorgba(to, 0.85)})`;
};

export const showToast = (mode, message, onClose) => {
  toast.dismiss();
  toast[mode](message, {
    autoClose: 5000,
    theme: "colored",
    // onOpen: (props) => console.log("i opened"),
    onClose: onClose,
    style: {
      fontFamily: "inherit",
    },
    position: toast.POSITION.BOTTOM_CENTER,
  });
};

export const showLoadingToast = (message) => {
  toast.dismiss();
  toast.info(message, {
    autoClose: false,
    style: {
      fontFamily: "inherit",
      boxShadow: "0 1px 10px 0 rgb(0 0 0 / 30%), 0 2px 15px 0 rgb(0 0 0 / 25%)",
      color: "#333",
    },
    position: toast.POSITION.BOTTOM_CENTER,
    icon: <Spin style={{ transform: "scale(1.5)", fill: "#666" }} />,
  });
};

export const objectDateToString = (objDate) => {
  return `${objDate.year}${objDate.month < 10 ? "0" : ""}${objDate.month}${
    objDate.day < 10 ? "0" : ""
  }${objDate.day}`;
};

export const stringDateToShowingDate = (strDate) => {
  return `${strDate.slice(0, 4)}/${strDate.slice(4, 6)}/${strDate.slice(6, 8)}`;
};

// export const stringDateToObject = (stringDate) => {
//   const arrDate = stringDate.split("/");
//   return { year: arrDate[0], month: arrDate[1], day: arrDate[2] };
// };

export const dataURItoBlob = (dataURI) => {
  var byteString = atob(dataURI.split(",")[1]);
  var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  var blob = new Blob([ab], { type: mimeString });
  return blob;
};

export const getDeviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  }
  if (
    /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return "mobile";
  }
  return "desktop";
};
