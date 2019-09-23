import Vue from "vue";
import Router from "vue-router";
import lazyLoading from "./lazyLoading";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "*",
      redirect: { name: "login" }
    },
    {
      name: "auth",
      path: "/auth",
      component: lazyLoading("auth/AuthLayout"),
      children: [
        {
          name: "login",
          path: "login",
          component: lazyLoading("auth/login/LoginForm")
        },
        {
          name: "signUp",
          path: "signUp",
          component: lazyLoading("auth/signUp/SignUpForm")
        }
      ]
    },
    {
      name: "reminder",
      path: "/reminder",
      component: lazyLoading("reminder/ReminderLayout"),
      children: [
        {
          name: "newEvent",
          path: "newEvent",
          component: lazyLoading("reminder/views/newEvent/NewEventLayout")
        },
        {
          name: "calendar",
          path: "calendar",
          component: lazyLoading("reminder/views/calendar/CalendarLayout")
        },
        {
          name: "settings",
          path: "settings",
          component: lazyLoading("reminder/views/settings/SettingsLayout")
        }
      ]
    }
  ]
});

export default router;
