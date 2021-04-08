const burgerMenu = document.querySelector('#bar');
const menuItems = document.querySelector('.navigation-ul');
const closeButton = document.getElementById('x');
burgerMenu.addEventListener("click", openNav);
closeButton.addEventListener('click', closeNav);

function openNav() {
    menuItems.style.display = 'block'
    burgerMenu.style.display = 'none';
    closeButton.style.display = 'block'
}

function closeNav() {
    menuItems.style.display = 'none';
    burgerMenu.style.display = 'block';
    closeButton.style.display = 'none';
}
const showAllBtn = document.getElementById('show');
const designBtn = document.getElementById('design');
const developmentBtn = document.getElementById('development');
const marketingBtn = document.getElementById('marketing');
const seoBtn = document.getElementById('seo');
const designPhotos = document.querySelector('.design-parent');
const prj1 = document.querySelector('.prj-1');
const designParent = document.querySelector('.design-parent')
const developmentParent = document.querySelector('.development-parent')
const marketingParent = document.querySelector('.marketing-parent')
const seoParent = document.querySelector('.seo-parent')


showAllBtn.addEventListener('click', function() {
    showAllBtn.style.color = "white";
    showAllBtn.style.background = '#14bf98';
    designBtn.style.color = '#7b7e85';
    designBtn.style.background = "#F1F4F7";
    designParent.classList.remove('show');
    prj1.classList.remove('hidden');
    developmentParent.classList.add('hidden')
    developmentBtn.style.color = "#7b7e85";
    developmentBtn.style.background = "#F1F4F7";
    marketingBtn.style.background = "#F1F4F7"
    marketingBtn.style.color = "#7b7e85";
    marketingParent.classList.add('hidden')
    seoParent.classList.add('hidden');
    seoBtn.style.color = "#7b7e85";
    seoBtn.style.background = "#F1F4F7"

})


designBtn.addEventListener('click', function() {
    prj1.classList.add('hidden');
    designParent.classList.add('show');
    showAllBtn.style.background = '#F1F4F7'
    showAllBtn.style.border = 'none';
    showAllBtn.style.color = '#7b7e85';
    designBtn.style.color = "white"
    designBtn.style.background = "#14bf98"
    developmentBtn.style.color = "#7b7e85"
    developmentBtn.style.background = "#F1F4F7"
    marketingBtn.style.background = "#F1F4F7"
    marketingBtn.style.color = "#7b7e85";
    marketingParent.classList.add('hidden')
    developmentParent.classList.add('hidden')
    seoParent.classList.add('hidden');
    seoBtn.style.color = "#7b7e85";
    seoBtn.style.background = "#F1F4F7"
});
developmentBtn.addEventListener('click', function() {
    designParent.classList.remove('show');
    designParent.classList.add('hidden');
    prj1.classList.add('hidden');
    developmentParent.classList.remove('hidden');
    developmentBtn.style.background = "#14bf98";
    developmentBtn.style.color = 'white';
    showAllBtn.style.background = "#F1F4F7";
    showAllBtn.style.color = "#7b7e85";
    designBtn.style.color = "#7b7e85";
    designBtn.style.background = "#F1F4F7";
    marketingBtn.style.background = "#F1F4F7"
    marketingBtn.style.color = "#7b7e85";
    marketingParent.classList.add('hidden')
    seoParent.classList.add('hidden');
    seoBtn.style.color = "#7b7e85";
    seoBtn.style.background = "#F1F4F7"


})
marketingBtn.addEventListener('click', function() {
    marketingParent.classList.remove('hidden');
    prj1.classList.add('hidden');
    designParent.classList.remove('show')
    developmentParent.classList.add('hidden');
    marketingBtn.style.color = "#fff"
    marketingBtn.style.background = "#14bf98";
    showAllBtn.style.color = "#7b7e85";
    showAllBtn.style.background = "#F1F4F7"
    developmentBtn.style.color = "#7b7e85";
    developmentBtn.style.background = "#F1F4F7";
    designBtn.style.color = '#7b7e85';
    designBtn.style.background = "#F1F4F7";
    seoParent.classList.add('hidden');
    seoBtn.style.color = "#7b7e85";
    seoBtn.style.background = "#F1F4F7"


})
seoBtn.addEventListener('click', function() {
    seoParent.classList.remove('hidden');
    marketingParent.classList.add('hidden');
    prj1.classList.add('hidden');
    designParent.classList.remove('show')
    developmentParent.classList.add('hidden');
    seoBtn.style.color = "white";
    seoBtn.style.background = "#14bf98";
    showAllBtn.style.color = "#7b7e85";
    showAllBtn.style.background = "#F1F4F7"
    designBtn.style.color = '#7b7e85';
    designBtn.style.background = "#F1F4F7";
    marketingBtn.style.background = "#F1F4F7"
    marketingBtn.style.color = "#7b7e85";

});