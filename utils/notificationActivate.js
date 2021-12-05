import { post } from "axios";

const urlBase64ToUint8Array = (base64String) => {
  var padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  var base64 = (base64String + padding).replace(/\-/g, "+").replace(/_/g, "/");

  var rawData = window.atob(base64);
  var outputArray = new Uint8Array(rawData.length);

  for (var i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
};

const configurePushSub = () => {
  if (!("serviceWorker" in navigator)) {
    return;
  }

  var reg;
  navigator.serviceWorker.ready
    .then(function (swreg) {
      reg = swreg;
      return swreg.pushManager.getSubscription();
    })
    .then(function (sub) {
      if (sub === null) {
        // Create a new subscription
        var vapidPublicKey =
          "BKMOXd1ARsXXz97HxAFb6tU2BmVdhDJkvpscv77UWadgtLidzKZUxHMloFHdOx18kuYxHkYUTHGzbW0I_cwwAyE";
        var convertedVapidPublicKey = urlBase64ToUint8Array(vapidPublicKey);
        return reg.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: convertedVapidPublicKey,
        });
      } else {
      }
    })
    .then((newSub) => {
      if (newSub) return post("/subscriptions", newSub);
    })
    .then((res) => {
      console.log("new subscription", res);
    })
    .catch(function (err) {
      console.log(err);
    });
};

export const askForNotificationPermission = () => {
  Notification.requestPermission((result) => {
    if (result !== "granted") {
    } else {
      configurePushSub();
    }
  });
};
