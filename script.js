document.querySelector('body').addEventListener("mousemove", (e) => {  
  gsap.to("#cursor", {
    x: e.x,
    y: e.y,
    opacity: 1,
    duration: 0.4,
    ease: 'power2.out'
  });
});
document.querySelector('body').addEventListener("mouseleave", () => {
  gsap.to("#cursor", {
    opacity: 0,
  });
});

function homePageAnimation() {
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
      // markers: true,
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

const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    let xPos = 0;
    let yPos = 0;

    if (card.id === "card1") {
      xPos = e.x / 10;
      yPos = -e.y / 10;
    } else if (card.id === "card2") {
      xPos = e.x / 30;
      yPos = -e.y / 20;
    } else if (card.id === "card3") {
      xPos = e.x / 10;
      yPos = -e.y / 40;
    } else if (card.id === "card4") {
      xPos = e.x / 40;
      yPos = -e.y / 30;
    }

    gsap.to(`#${card.id} .left .learn-more`, {
      x: xPos,
      y: yPos,
      duration: 1,
    });
  });

  card.addEventListener("mouseleave", (e) => {
    gsap.to(`#${card.id} .left .learn-more`, {
      x: 0,
      y: 0,
      duration: 1,
    });
  });
});

function page3Animation() {
  var tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section3",
      scroller: "body",
      // markers: true,
      start: "top 70%",
      end: "top 0%",
      scrub: 2,
    },
  });

  tl3.from(
    ".banner .logo img",
    {
      scale: 0.5,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    },
    "aa"
  );

  tl3.from(
    ".banner .info h2",
    {
      opacity: 0,
      y: 50,
      duration: 1,
    },
    "aa"
  );
  tl3.from(".banner .info p", {
    opacity: 0,
    y: 50,
    duration: 1,
  });
  tl3.from(".banner .info button", {
    opacity: 0,
    duration: 0.5,
  });
}

var tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section3 .heading",
    scroller: "body",
    // markers: true,
    start: "top 60%",
    end: "top 15%",
    scrub: 2,
  },
});
tl4.from(".section3 .heading", {
  x: -40,
  opacity: 0,
});
tl4.from(".case-study .group1 p", {
  x: -40,
  opacity: 0,
  stagger: 2,
  duration: 1,
  ease: 'power2.out'
});
tl4.from(".case-study .group1 span", {
  opacity: 0,
});

var tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: "footer .mail",
    scroller: "body",
    // markers: true,
    start: "top 60%",
    end: "top 2%",
    scrub: 5,
  },
});
tl5.from("footer .mail .form label", {
  y: 50,
  opacity: 0,
  duration: 1,
});
tl5.from(
  "footer .mail .form input, footer .mail .form textarea",
  {
    y: 50,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
  },
  "form"
);
tl5.from(".mail .form button", {
  opacity: 0,
  duration: 1,
});
tl5.to(
  "footer .mail .img img",
  {
    rotate: 0,
    duration: 5,
    ease: "power2.out",
  },
  "-=0.7"
);

var tl6 = gsap.timeline({
  scrollTrigger: {
    trigger: "footer .footer",
    scroller: "body",
    start: "top 70%",
    end: "top 35%",
    scrub: 2,
  },
});

tl6.from(".footer .contact .contact-info h3", {
  y: 30,
  opacity: 0,
});
tl6.from(
  ".footer .contact .contact-info p",
  {
    y: 30,
    opacity: 0,
    stagger: 0.5,
  },
  "abc"
);
tl6.from(
  ".footer .contact .contact-mail",
  {
    y: 50,
    opacity: 0,
  },
  "abc"
);
tl6.from(
  ".footer .contact .contact-mail input, .footer .contact .contact-mail button",
  {
    opacity: 0,
  },
  "-=1"
);
tl6.from(".footer hr", {
  x: "-100%",
  opacity: 0,
  ease: "power2.out",
});
tl6.from(
  ".footer .terms p",
  {
    y: 30,
    opacity: 0,
    stagger: 0.2,
  },
  "-=0.7"
);

homePageAnimation();
page2Animation();
page3Animation();
