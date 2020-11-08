new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  //   scrollHorizontally: true,
  anchors: ["section1", "section2", "section3", "section4", "section5"],
  navigation: true,
  navigationPosition: "left",
  // navigationTooltips: [
  //   "Section 1",
  //   "Section 2",
  //   "Section 3",
  //   "Section 4",
  //   "Section 5",
  // ],
  animateAnchor: true,
  easingcss3: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  scrollingSpeed: 1000,
});

//methods
// fullpage_api.setAllowScrolling(false);

var scene = document.getElementById("scene");
var portfolio = document.querySelector(".portfolio");
var parallaxInstance = new Parallax(scene);
var parallaxInstance = new Parallax(portfolio);
