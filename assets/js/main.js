// ==================== SHOW MENU ===============
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    // validate that variables exist
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            // add show-menu to the div tag with te nav__menu
            nav.classList.toggle('show-menu')

        })
    }
}
showMenu('nav-toggle', 'nav-menu')

// ============== REMOVE MENU MOBILE ===========
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')

    // wwhen we click on each nav__link, we remove the show-menu
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// =================== SCROLL SECTION ACTIVE LINK ============
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(currentSection => {
        const sectionHeight = currentSection.offsetHeight
        const sectionTop = currentSection.offsetTop - 50;
        let sectionId = currentSection.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

// ============= CHANGE BACKGROUND HEADER ===========

function scrollHeader() {
    const nav = document.getElementById('header')
    // when the scroll is greater than 200vh, add the scroll-header class
    this.scrollY >= 200 ? nav.classList.add('scroll-header') : nav.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)


// ============= SHOW SCROLL TOP ====================

function scrollTop() {
    const scrollTop = document.getElementById('scroll-top')
    // scroll > 560 vh, add show-scroll to the tag with the class scroll-top  
    this.scrollY >= 560 ? scrollTop.classList.add('show-scroll') : scrollTop.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollTop)

// =============== DARK LIGHT THEME =================
const themeButton = document.querySelector('#theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-toggle-right'

// Previously selecterd topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-toggle-left' : 'bx-toggle-right'

// We validate if the user previously chose a topic
if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-toggle-left' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with de button
themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    // We save the theme and current icon that user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


// ======================= SCROLL REVEAL ANIMATION ===================

const sr = ScrollReveal({
    distance: '30px',
    duration: 1800,
    reset: true
});

sr.reveal(`.home__data, .home__img,
            .decoration__data,
            .accessory__content,
            .footer__content`, {
    origin: 'top',
    interval: 200
})

sr.reveal(`.share__img, .send__content`, {
    origin: 'left'
})

sr.reveal(`.share__data, .send__img`, {
    origin: 'right'
})