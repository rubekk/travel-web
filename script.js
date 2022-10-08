const sliderImg=document.querySelector(".img");
const imgCaption=document.querySelector(".caption");
const prevBtn=document.querySelector(".prev-btn");
const nextBtn=document.querySelector(".next-btn");
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

const getSliderImg=()=>{
    sliderImg.src=imgData[currImg].source;
    imgCaption.innerText=imgData[currImg].caption;
}
getSliderImg();

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



