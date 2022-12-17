const navMenu = document.getElementById('navMenu'),
      navToggle = document.getElementById('navToggle'),
      navClose = document.getElementById('navClose')

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add("showMenu")
    })
}

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove("showMenu")
    })
}

const navLink = document.querySelectorAll('.navLink')

function linkAction() {
    const navMenu = document.getElementById('navMenu')
    navMenu.classList.remove('showMenu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualificationActive')
        })
        target.classList.add('qualificationActive')

        tab.forEach(tab => {
            tab.classList.remove('qualificationActive')
        })
        tab.classList.add('qualificationActive')
    })
})

const themeButton = document.getElementById('themeButton')
const darkTheme = 'darkTheme'
const iconTheme = 'uil-sun'

const selectedTheme = localStorage.getItem('selectedTheme')
const selectedIcon = localStorage.getItem('selectedIcon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

if(selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selectedTheme', getCurrentTheme())
    localStorage.setItem('selectedIcon', getCurrentIcon())
})
