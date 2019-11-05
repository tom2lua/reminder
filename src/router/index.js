import Vue from 'vue'
import Router from 'vue-router'
import lazyLoading from './lazyLoading'
import store from '../store/index'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '*',
      redirect: { name: 'login' }
    },
    {
      name: 'auth',
      path: '/auth',
      component: lazyLoading('auth/AuthLayout'),
      children: [
        {
          name: 'login',
          path: 'login',
          component: lazyLoading('auth/login/LoginForm')
        },
        {
          name: 'signUp',
          path: 'signUp',
          component: lazyLoading('auth/signUp/SignUpForm')
        }
      ]
    },
    {
      name: 'reminder',
      path: '/reminder',
      component: lazyLoading('reminder/ReminderLayout'),
      children: [
        {
          name: 'dashboard',
          path: 'dashboard',
          component: lazyLoading('reminder/views/dashboard/DashboardLayout')
        },
        {
          name: 'events',
          path: 'events',
          component: lazyLoading('reminder/views/events/eventList/EventList')
        },
        {
          name: 'modifyEvent',
          path: 'modifyEvent/:id',
          component: lazyLoading('reminder/views/events/eventForm/EventForm')
        },
        {
          name: 'newEvent',
          path: 'newEvent',
          component: lazyLoading('reminder/views/events/eventForm/EventForm')
        },
        {
          name: 'eventDetail',
          path: 'eventDetail/:id',
          component: lazyLoading(
            'reminder/views/events/eventDetail/EventDetail'
          )
        },
        {
          name: 'calendar',
          path: 'calendar',
          component: lazyLoading('reminder/views/calendar/CalendarLayout')
        },
        {
          name: 'settings',
          path: 'settings',
          component: lazyLoading('reminder/views/settings/SettingsLayout')
        },
        {
          name: 'editProfile',
          path: 'editProfile',
          component: lazyLoading('reminder/views/user/userForm/UserForm')
        },
        {
          name: 'editSettings',
          path: 'editSettings',
          component: lazyLoading(
            'reminder/views/settings/settingsForm/SettingsForm'
          )
        }
        // {
        //   name: 'user',
        //   path: 'user',
        //   component: lazyLoading('reminder/views/user/UserView'),
        //   children: [
        //     {
        //       name: 'editProfile',
        //       path: 'editProfile',
        //       component: lazyLoading('reminder/views/user/userForm/UserForm')
        //     },
        //     {
        //       name: 'userInfo',
        //       path: 'userInfo',
        //       component: lazyLoading(
        //         'reminder/views/user/userInfoView/UserInfoView'
        //       )
        //     }
        //   ]
        // }
      ]
    }
  ]
})

router.beforeResolve((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/auth/login', '/auth/signUp']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = store.state.authentication.user

  if (authRequired && !loggedIn) {
    return next('/auth/login')
  } else if (loggedIn && !authRequired) {
    return next('/reminder/calendar')
  }
  next()
})

export default router
