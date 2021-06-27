export default {
  state: {
    theme: {
      primaryColor: {
        base: '#be9063',
        baseRgb: '190, 144, 99',
        light: '#132226',
        lighter: '#353b38'
      },
      secondaryColor: '#040c0e',
      logoColor: '#7957d5',
      textColor: {
        primary: '#be9063',
        secondary: 'white',
        secondaryRgb: '255, 255, 255'
      },
      calendarGridColor: {
        thisMonth: '040c0e',
        notThisMonth: '#1c2224'
      },
      fontSize: {
        normal: '1.2vw',
        header: '2.5vw'
      }
    },
    themes: [
      {
        name: 'Default',
        primaryColor: {
          base: '#7957d5',
          baseRgb: '121, 87, 213',
          light: '#927bcf',
          lighter: '#9f8fcc'
        },
        secondaryColor: 'white',
        logoColor: '#7957d5',
        textColor: {
          primary: '#7957d5',
          secondary: '#4a4a4a',
          secondaryRgb: '74, 74, 74',
          secondaryContrast: 'white'
        },
        calendarGridColor: {
          thisMonth: 'white',
          notThisMonth: '#9f8fcc'
        },
        fontSize: {
          normal: '1.2vw',
          header: '2.5vw'
        }
      },
      {
        name: 'Retro',
        primaryColor: {
          base: '#6a8a82',
          baseRgb: '106, 138, 130',
          light: '#81a89f',
          lighter: '#adddd1'
        },
        secondaryColor: 'white',
        logoColor: '#7957d5',
        textColor: {
          primary: '#6a8a82',
          secondary: '#282726',
          secondaryRgb: '40, 39, 38',
          secondaryContrast: 'white'
        },
        calendarGridColor: {
          thisMonth: 'white',
          notThisMonth: '#bed8d2'
        },
        fontSize: {
          normal: '1.2vw',
          header: '2.5vw'
        }
      },
      {
        name: 'Coffee',
        primaryColor: {
          base: '#be9063',
          baseRgb: '190, 144, 99',
          light: '#132226',
          lighter: '#252927'
        },
        secondaryColor: '#040c0e',
        logoColor: '#7957d5',
        textColor: {
          primary: '#be9063',
          secondary: 'white',
          secondaryRgb: '255, 255, 255',
          secondaryContrast: 'white'
        },
        calendarGridColor: {
          thisMonth: '040c0e',
          notThisMonth: '#1c2224'
        },
        fontSize: {
          normal: '1.2vw',
          header: '2.5vw'
        }
      }
    ],
    default: {
      name: 'Default',
      primaryColor: {
        base: '#7957d5',
        baseRgb: '121, 87, 213',
        light: '#927bcf',
        lighter: '#9f8fcc'
      },
      secondaryColor: 'white',
      logoColor: '#7957d5',
      textColor: {
        primary: '#7957d5',
        secondary: '#4a4a4a',
        secondaryRgb: '74, 74, 74'
      },
      calendarGridColor: {
        thisMonth: 'white',
        notThisMonth: '#9f8fcc'
      },
      fontSize: {
        normal: '1.2vw',
        header: '2.5vw'
      }
    },
    classicRetro: {
      name: 'Retro',
      primaryColor: {
        base: '#6a8a82',
        baseRgb: '106, 138, 130',
        light: '#81a89f',
        lighter: '#adddd1'
      },
      secondaryColor: 'white',
      logoColor: '#7957d5',
      textColor: {
        primary: '#6a8a82',
        secondary: '#282726',
        secondaryRgb: '40, 39, 38'
      },
      calendarGridColor: {
        thisMonth: 'white',
        notThisMonth: '#bed8d2'
      },
      fontSize: {
        normal: '1.2vw',
        header: '2.5vw'
      }
    },
    coffee: {
      name: 'Coffee',
      primaryColor: {
        base: '#be9063',
        baseRgb: '190, 144, 99',
        light: '#132226',
        lighter: '#353b38'
      },
      secondaryColor: '#040c0e',
      logoColor: '#7957d5',
      textColor: {
        primary: '#be9063',
        secondary: 'white',
        secondaryRgb: '255, 255, 255'
      },
      calendarGridColor: {
        thisMonth: '040c0e',
        notThisMonth: '#1c2224'
      },
      fontSize: {
        normal: '1.2vw',
        header: '2.5vw'
      }
    }
  },
  mutations: {},
  actions: {
    SET_THEME({ state }, payload) {
      const theme = state.themes.find(theme => theme.name === payload)
      localStorage.setItem('theme', JSON.stringify(theme))

      document.documentElement.style.setProperty(
        '--primary-color',
        theme.primaryColor.base
      )
      document.documentElement.style.setProperty(
        '--primary-color-rgb',
        theme.primaryColor.baseRgb
      )
      document.documentElement.style.setProperty(
        '--primary-color-light',
        theme.primaryColor.light
      )
      document.documentElement.style.setProperty(
        '--primary-color-lighter',
        theme.primaryColor.lighter
      )
      document.documentElement.style.setProperty(
        '--secondary-color',
        theme.secondaryColor
      )
      document.documentElement.style.setProperty(
        '--logo-color',
        theme.logoColor
      )
      document.documentElement.style.setProperty(
        '--text-color-primary',
        theme.textColor.primary
      )
      document.documentElement.style.setProperty(
        '--text-color-secondary',
        theme.textColor.secondary
      )
      document.documentElement.style.setProperty(
        '--text-color-secondary-rgb',
        theme.textColor.secondaryRgb
      )
      document.documentElement.style.setProperty(
        '--text-color-secondary-contrast',
        theme.textColor.secondaryContrast
      )
      document.documentElement.style.setProperty(
        '--calendar-grid-color-thisMonth',
        theme.calendarGridColor.thisMonth
      )
      document.documentElement.style.setProperty(
        '--calendar-grid-color-notThisMonth',
        theme.calendarGridColor.notThisMonth
      )
      document.documentElement.style.setProperty(
        '--font-size-normal',
        theme.fontSize.normal
      )
      document.documentElement.style.setProperty(
        '--font-size-header',
        theme.fontSize.header
      )
    },
    INIT_THEME({ dispatch }) {
      const themeFromLocal = JSON.parse(localStorage.getItem('theme'))
      if (!themeFromLocal) {
        dispatch('SET_THEME', 'Default')
      } else {
        dispatch('SET_THEME', themeFromLocal.name)
      }
    }
  }
}
