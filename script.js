const menu = document.querySelector('.fa-bars');
const xmark = document.querySelector('.fa-xmark')
const mblMenu = document.querySelector('.mblMenu');

function handleMenu() {

    menu.addEventListener('click', () => {
        mblMenu.classList.remove('hidden')
        mblMenu.classList.add('ourCustomSize:hidden')
    })
    xmark.addEventListener('click', () => {
        mblMenu.classList.add('hidden')
    })

}


const dtElements = document.querySelectorAll('dt')
dtElements.forEach(element => {
    element.addEventListener('click', () => {

        const ddId = element.getAttribute('aria-controls');
        const ddElement = document.getElementById(ddId);

        ddElement.classList.add('flex');
        ddElement.classList.add('flex-col');
        ddElement.classList.add('gap-5');
        ddElement.classList.add('mb-8');  // 8 se km add ni ho rha
        const dtArrowIcons = element.querySelectorAll('i');

        dtArrowIcons.forEach(arrow => {
            arrow.classList.toggle('-rotate-180');
            arrow.classList.toggle('transition-transform');
        })

        ddElement.classList.toggle('hidden');
    })
})