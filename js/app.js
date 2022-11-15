const tabs = document.querySelectorAll(".tabheader__item")
const tabsParent = document.querySelector(".tabheader__items");
const tabContent = document.querySelectorAll(".tabcontent")

const hideTabContent = () => {
    tabContent.forEach((item) => {
        item.style.display ="none";
    })
    tabs.forEach((item) => {
        item.classList.remove("tabheader__item_active")
    })
}

const showTabContent = (i=3) => {
    tabContent[i].style.display = "block";
    tabs[i].classList.add("tabheader__item_active");
}
// задание 1
let s = 0;
function TensAuto() {
    const slider = setInterval ((i) => {
        s++
        if (s > 3) {
            s = 0;
        }
        hideTabContent()
        showTabContent(s)
    }, 2000)
}
        hideTabContent()
        showTabContent()
        TensAuto()

tabsParent.addEventListener("click", (e) =>{
    const target = e.target;
    if (target.classList.contains("tabheader__item")){
    tabs.forEach((item, i) => {
        if (target === item){
            
            hideTabContent()
            showTabContent(i)
            s=i
        }
    })
    }
})

const modal = document.querySelector(".modal")
const modalTrigger = document.querySelector(".btn_white")
const closeModalBtn = document.querySelector(".modal__close")



const openModal = () => {
    modal.classList.add("show")
    modal.classList.remove("hide")
    document.body.style.overflow = "hidden"
}



const closeModal = () => {
    modal.classList.add("hide");
    modal.classList.remove("show")
    document.body.style.overflow = ""
}
modalTrigger.addEventListener("click", openModal)
closeModalBtn.addEventListener("click", closeModal)

//задание 2
modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal()
        console.log(event.target);
    }
})

closeModalBtn.addEventListener("click", closeModal)

const scrollModal = () => {
    const down = document.documentElement;
    if (down.scrollTop + down.clientHeight >= down.scrollHeight){
        openModal()
        document.body.style.overflow = "hidden";
    }
}
window.addEventListener("scroll", scrollModal)