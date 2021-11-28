// import { NetworkOnly } from "workbox-strategies";
// import { registerRoute } from "workbox-routing";
// import { BackgroundSyncPlugin } from "workbox-background-sync";

// background sync
// const bgSyncPlugin = new BackgroundSyncPlugin("addReviewQueue", {
//   maxRetentionTime: 24 * 60, // Retry for max of 24 Hours (specified in minutes)
//   onSync: async ({ queue }) => {
//     console.log("queue from Queue", queue);
//     let entry;
//     while ((entry = await queue.shiftRequest())) {
//       try {
//         console.log("entry from Queue", entry);
//       } catch (error) {
//         console.log("error from Queue", error);
//       }
//     }
//   },
// });
// registerRoute(
//   ({ url }) => {
//     const { pathname } = url;

//     if (pathname === "/api/v1/reviews") console.log("helllooooo broooooo", url);

//     if (pathname === "/api/v1/reviews") return true;
//     return false;
//   },
//   new NetworkOnly({
//     plugins: [bgSyncPlugin],
//   }),
//   "POST"
// );

self.addEventListener("notificationclose", function (event) {
  console.log("Notification was closed", event);
});
