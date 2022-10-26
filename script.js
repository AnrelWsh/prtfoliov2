/*BURGER MENU DISPLAY*/ 

const btnBurger = document.getElementById('menu-btn')
const menuBurger = document.getElementById('menu')
const nOverflow = document.getElementById('html')

btnBurger.addEventListener('click', () => {
  if (menuBurger.style.display == "none") {
    menuBurger.style.display = "block"
    btnBurger.classList.remove("menu-btn-close")
    btnBurger.classList.add("menu-btn-open")
    nOverflow.style.overflowY = "hidden"
  } else{
    menuBurger.style.display = "none"
    btnBurger.classList.remove("menu-btn-open")
    btnBurger.classList.add("menu-btn-close")
    nOverflow.style.overflowY = "visible"
  }
})

/**INTRO HEADER ANIM */

gsap.registerPlugin(ScrollTrigger);
const bigTitle = document.querySelectorAll('#ttlIntro')
const bigLogo = document.querySelectorAll('#logoIntro')

bigTitle.forEach(el => {
  gsap.to(el, {
      scrollTrigger: {
      trigger: el,
      start: 30,
      end: "top",
      scrub: 1,
      toggleActions : "play"
      },
      x: 150,
  })
})
bigLogo.forEach(el => {
  gsap.to(el, {
      scrollTrigger: {
      trigger: el,
      start: 30,
      end: "top",
      scrub: 1,
      toggleActions : "play"
      },
      x: -150,
  })
})


/**GSAP API ANIMATION OF SLIDE TITLE */

gsap.registerPlugin(ScrollTrigger);
const slideTitleUp = document.querySelectorAll('.slide-title')
const slideTitleDown = document.querySelectorAll('.slide-title-reverse')

slideTitleUp.forEach(el => {
  gsap.to(el, {
      scrollTrigger: {
      trigger: el,
      start: "top bottom",
      end: "top",
      scrub: 1,
      toggleActions : "play"
      },
      x: -200,
  })
})
slideTitleDown.forEach(el => {
  gsap.to(el, {
      scrollTrigger: {
      trigger: el,
      start: "top bottom",
      end: "top",
      scrub: 1,
      toggleActions : "play"
      },
      x: 300,
  })
})

  /*const largeTitle = document.querySelectorAll('.largeTitle')

  if (largeTitle[0]) {
    largeTitle.forEach((section) => {
      const title = document.querySelector('.line-0', section)

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      })

      tl.to(title, { scale: 0.35 })
    })
  }*/


/**CHANGE IMAGE ON HOVER */

let imgMe = document.getElementById("imgMe")
const me1 = document.getElementById("me1")
const me2 = document.getElementById("me2")
const me3 = document.getElementById("me3")

if(me1 && me2 && me3 !== null) {
  me1.addEventListener('mouseover', () => {
    imgMe.src = "img/logoIIM.png" 
  })
  me2.addEventListener('mouseover', () => {
      imgMe.src = "img/workstudy.jpg" 
  })
  me3.addEventListener('mouseover', () => {
      imgMe.src = "img/moi.gif"
  })
}




/**INIT MAGNET MOUSE API */

let mm = new MagnetMouse({
  magnet: {
    element: '.magnet',
    position: "center"
  }
}
);
mm.init();


/*SKILLS SECTION GRID DISPLAY CHANGES*/

var skillsSec = document.getElementById("skills")

const frontEnd = document.getElementById("fe")
const backEnd = document.getElementById("be")
const adobeSkill = document.getElementById("adobe")
const otherSkill = document.getElementById("other")

const frontContent = document.getElementById("content-fe")
const backContent = document.getElementById("content-be")
const adobeContent = document.getElementById("content-adobe")
const otherContent = document.getElementById("content-other")

function reinitSkills() {
  skillsSec.classList.remove("skills-init")
  skillsSec.classList.add("skills-clicked")

  frontEnd.classList.remove("skills-title")
  backEnd.classList.remove("skills-title")
  adobeSkill.classList.remove("skills-title")
  otherSkill.classList.remove("skills-title")

  frontEnd.classList.remove("skills-selected")
  backEnd.classList.remove("skills-selected")
  adobeSkill.classList.remove("skills-selected")
  otherSkill.classList.remove("skills-selected")
}

frontEnd.addEventListener('click', () => {
  reinitSkills()

  otherSkill.classList.add("skills-title")
  backEnd.classList.add("skills-title")
  adobeSkill.classList.add("skills-title")
  frontEnd.classList.add("skills-selected")

  backContent.style.display = "none"
  otherContent.style.display = "none"
  adobeContent.style.display = "none"
  frontContent.style.display = "grid"

  frontEnd.style.gridArea = "selected"
  backEnd.style.gridArea = "skill1"
  adobeSkill.style.gridArea = "skill2"
  otherSkill.style.gridArea = "skill3"
})

backEnd.addEventListener('click', () => {
  reinitSkills()

  frontEnd.classList.add("skills-title")
  otherSkill.classList.add("skills-title")
  adobeSkill.classList.add("skills-title")
  backEnd.classList.add("skills-selected")

  frontContent.style.display = "none"
  otherContent.style.display = "none"
  adobeContent.style.display = "none"
  backContent.style.display = "grid"
  
  backEnd.style.gridArea = "selected"
  frontEnd.style.gridArea = "skill1"
  adobeSkill.style.gridArea = "skill2"
  otherSkill.style.gridArea = "skill3"
})

adobeSkill.addEventListener('click', () => {
  reinitSkills()

  frontEnd.classList.add("skills-title")
  backEnd.classList.add("skills-title")
  otherSkill.classList.add("skills-title")
  adobeSkill.classList.add("skills-selected")

  frontContent.style.display = "none"
  otherContent.style.display = "none"
  backContent.style.display = "none"
  adobeContent.style.display = "grid"
  
  adobeSkill.style.gridArea = "selected"
  frontEnd.style.gridArea = "skill1"
  backEnd.style.gridArea = "skill2"
  otherSkill.style.gridArea = "skill3"
})

otherSkill.addEventListener('click', () => {
  reinitSkills()

  frontEnd.classList.add("skills-title")
  backEnd.classList.add("skills-title")
  adobeSkill.classList.add("skills-title")
  otherSkill.classList.add("skills-selected")
  

  frontContent.style.display = "none"
  adobeContent.style.display = "none"
  backContent.style.display = "none"
  otherContent.style.display = "grid"
  
  otherSkill.style.gridArea = "selected"
  frontEnd.style.gridArea = "skill1"
  backEnd.style.gridArea = "skill2"
  adobeSkill.style.gridArea = "skill3"
})


/**FADE APPARITION OF PROJECTS WITH ITERSECTION OBSERVER API AND IMAGE MOVING WITH CURSOR ON IT*/

const ratio = .3
const options = {
  root: null,
  rootMargin: '0px',
  threshold: ratio
}
const intersect = function (entries, observer){
  entries.forEach(function (entry){
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add("reveal-visible")
      document.addEventListener("mousemove", function(e) {  
        var ax = (self.innerWidth/2- e.pageX)/20
        var ay = (self.innerHeight/10- e.pageY)/10
        var ay =- ay + 180
        document.getElementById("project-card1").style.transform = "rotateY("+ax+"deg) rotateX("+ay+"deg)"
        document.getElementById("project-card2").style.transform = "rotateY("+ax+"deg) rotateX("+ay+"deg)"
      })
      observer.unobserve(entry.target)
    }  
  
})}
const observer = new IntersectionObserver(intersect, options)
document.querySelectorAll('.reveal').forEach(function (r){
  observer.observe(r)
})
