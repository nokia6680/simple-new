// console.clear();

const canvas = document.getElementById("heroCanvas");
const context = canvas.getContext("2d");
let aspectRatio = 16/9;

canvas.width = 2880;
canvas.height = 2880/aspectRatio;

const frameCount = 90;
const currentFrame = index => (
    `static/sequence/swipe-home-src_${(index + 1).toString().padStart(5, '0')}.jpg`
);

const images = []
const airpods = {
    frame: 0
};

for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    images.push(img);
}
gsap.registerPlugin(ScrollTrigger);
gsap.to(airpods, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
        scrub: 0.5
    },
    onUpdate: render // use animation onUpdate instead of scrollTrigger's onUpdate
});

images[0].onload = render;

function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(images[airpods.frame], 0, 0); 
}
