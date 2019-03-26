const tabNodes = document.querySelectorAll(".tab");
const arrowNodes = document.querySelectorAll(".down-arrow");
const contentNode = document.querySelectorAll(".content");
tabNodes.forEach((tab, index) =>
  tab.addEventListener("click", function() {
    contentNode[index].classList.toggle("expanded");
    arrowNodes[index].classList.toggle("clicked");
  })
);
