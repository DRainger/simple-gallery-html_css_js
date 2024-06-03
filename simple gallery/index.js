const pics_gallery = [
    "pics/greg-rakozy-oMpAz-DN-9I-unsplash.jpg",
    "pics/kazuend-sN1cOV7wfCM-unsplash.jpg",
    "pics/mohamed-nohassi-odxB5oIG_iA-unsplash.jpg"
];

let curent_image = 0;

function PreviusImage(){
    curent_image--;
    if (curent_image < 0){
        curent_image = pics_gallery.length - 1
    }
    SetImage(curent_image);
}

function NextImage(){
    curent_image++;
    if (curent_image >= pics_gallery.length){
        curent_image = 0
    }
    SetImage(curent_image);
}

function SelectDot(index){
    const dots = document.getElementsByClassName("dot"); //get all elements with class name of "dot" in to pointer "dots"
    for (let i = 0; i < dots.length; i++){ // serculet all elements in dots and delete from class list "selected"
        dots[i].classList.remove("selected");
    }
    dots[index].classList.add("selected");//add "selected" to selected(index) dot element 
}

function ChangeImg(index){
    const img_cotainer = document.getElementById("picturs"); // capture div containing picture
    img_cotainer.innerHTML = ""; // delete contant in set div
    const newpic = document.createElement("img"); // create a element of type "img" in selected div
    newpic.src = pics_gallery[index]; //define sorce for the img element for imege array (pics_gallery)
    img_cotainer.append(newpic); //insert img hlement to div selected
}
function SetImage(index){
    SelectDot(index);
    ChangeImg(index);
}