function page1Animation() {
  var tl = gsap.timeline();

  tl.from("nav h1, nav h4,nav button", {
    y: -40,
    opacity: 0,
    delay: 0.5,
    duration: 0.7,
    stagger: 0.15,
  });
  tl.from(".center-part1 h1", {
    x: -300,
    opacity: 0,
    duration: 0.5,
  });
  tl.from(".center-part1 p", {
    x: -100,
    opacity: 0,
    duration: 0.4,
  });
  tl.from(".center-part1 button", {
    opacity: 0,
    duration: 0.4,
  });
  tl.from(
    ".center-part2 img",
    {
      opacity: 0,
      duration: 0.5,
      x: 200,
    },
    "-=0.7"
  );
  tl.from(".section-bottom img", {
    opacity: 0,
    y: 30,
    stagger: 0.15,
    duration: 0.6,
  });
}

function page2Animation() {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section2",
      scroller: "body",
      markers: true,
      start: "top 60%",
      end: "top 10%",
      scrub: 2,
    },
  });

  tl2.from(".heading", {
    y: 30,
    opacity: 0,
  });

  tl2.from(
    ".card.line1.left",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "anim-line1"
  );
  tl2.from(
    ".card.line1.right",
    {
      x: 300,
      opacity: 0,
      duration: 1,
    },
    "anim-line1"
  );

  tl2.from(
    ".card.line2.left",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "anim-line2"
  );
  tl2.from(
    ".card.line2.right",
    {
      x: 300,
      opacity: 0,
      duration: 1,
    },
    "anim-line2"
  );
}

page1Animation()
page2Animation()
