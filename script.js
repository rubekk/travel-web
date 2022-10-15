const hamBurger=document.querySelector('#ham');
const mobileNav=document.querySelector(".mobile-nav-bar");
const sliderImg=document.querySelector(".img");
const imgCaption=document.querySelector(".caption");
const prevBtn=document.querySelector(".prev-btn");
const nextBtn=document.querySelector(".next-btn");
const travelGallery=document.querySelector(".travel-gallery-inner");
const indGallerySec=document.querySelector(".ind-gallery-sec");
const indImg=document.querySelector(".ind-img");
const crossBtn=document.querySelector(".cross-btn");

let currImg=0;
const imgData=[
    {
        source: "/imgs/mountain-1.jpg",
        caption: "Beautiful mountain"
    },
    {
        source: "/imgs/mountain-2.jpg",
        caption: "Wonderful mountain"
    },
    {
        source: "/imgs/river-1.jpg",
        caption: "Beautiful river"
    },
    {
        source: "/imgs/river-2.jpg",
        caption: "Wonderful river"
    },
    {
        source: "/imgs/house-1.jpg",
        caption: "Beautiful house"
    },
    {
        source: "/imgs/house-2.jpg",
        caption: "Wonderful house"
    }
];
const galleryImgs=Array.from(travelGallery.children);

const handleMobileNav=()=>{
    hamBurger.classList.toggle("fa-times");
    mobileNav.classList.toggle("active");
}
const getSliderImg=()=>{
    sliderImg.src=imgData[currImg].source;
    imgCaption.innerText=imgData[currImg].caption;
}
getSliderImg();

hamBurger.addEventListener("click",handleMobileNav)
prevBtn.addEventListener("click",()=>{
    if(currImg==0) currImg=imgData.length-1;
    else currImg--;
    getSliderImg();
})
nextBtn.addEventListener("click",()=>{
    if(currImg==imgData.length-1) currImg=0;
    else currImg++;
    getSliderImg();
})
galleryImgs.forEach((img,index)=>{
    img.addEventListener("click",()=>{
        indGallerySec.style.display="flex";
        indImg.src=img.src;
    })
})
crossBtn.addEventListener("click",()=>{
    indGallerySec.style.display="none";
})