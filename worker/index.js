self.addEventListener("notificationclick", (event) => {
  const { notification, action } = event;
  console.log("event", event);

  if (action === "cancel") {
    notification.close();
  } else {
    event.waitUntil(
      clients.matchAll().then((clis) => {
        const client = clis.find((c) => {
          //if the visibilityState is equal to visible which means we have an open browser window basically,
          return c.visibilityState === "visible";
        });

        if (client !== undefined) {
          client.navigate(notification.data.url);
          client.focus();
        } else {
          clients.openWindow(notification.data.url);
        }
        notification.close();
      })
    );
  }
});

self.addEventListener("push", function (event) {
  var data = {
    title: "تور جدید",
    content:
      "یک تور جدید به تور های ما اضافه شد، اضافه شد. با ثبت نام در این تور یک سفر به یاد ماندنی داشته باشید ",
    openUrl: "http://localhost:3000/tours",
  };

  if (event.data) {
    data = JSON.parse(event.data.text());
  }

  var options = {
    body: data.content,
    icon: "/assets/logo/azadi-128x128.png",
    badge: "/assets/logo/azadi-128x128.png",
    lang: "fa-IR",
    actions: [
      {
        action: "confirm",
        title: "مشاهده",
      },
      {
        action: "cancel",
        title: "رد",
      },
    ],
    data: {
      url: data.openUrl,
    },
  };

  event.waitUntil(self.registration.showNotification(data.title, options));
});
