// Select all input elements
const inputs = document.querySelectorAll('input');

// Add a click event listener to each input
inputs.forEach(input => {
  input.addEventListener('click', function() {
    // Change background color to black
    this.style.backgroundColor = '#000045';
    // Change text color to white
    this.style.color = 'white';
  });
});

const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function(event) {
    event.preventDefault();
    removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
      if(navList[j].querySelector("a").classList.contains("active")){
        addBackSection(j);
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if(window.innerWidth < 1200){
      // Call the correct function to toggle the aside section
      asideSectionToggler();
    }
  });
}

function removeBackSection(){
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}

function addBackSection(num){
  // Use the correct parameter 'num' to reference the section
  allSection[num].classList.add("back-section");
}

function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

function updateNav(element){
  for(let i=0; i<totalNavList; i++){
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
      navList[i].querySelector("a").classList.add("active");
    }
  }
}

document.querySelector(".hire-me").addEventListener("click", function(){
  const sectionIndex = this.getAttribute("data-section-index");
  // Convert sectionIndex to a number before passing to addBackSection
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(Number(sectionIndex));
})

const navTogglerBtn = document.querySelector(".nav-toggler"),
      aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
  asideSectionToggler();
})

function asideSectionToggler(){
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for(let i=0; i<totalSection; i++){
    allSection[i].classList.toggle("open");
  }
}
