let ImgSize = document.getElementById("imgSize");
let numSize = document.getElementById("SizeNum");
let paraEl = document.getElementById("para");
let imageSize = 300;
let size = 5;


function increasePic() {

  if (imageSize < 355 && size < 85) {
    imageSize += 5;
    size += 5;
    paraEl.textContent = "";
  }
  else {
    paraEl.textContent = "Max Width Reached";
  }

  ImgSize.style.width = imageSize + "px";
  numSize.textContent = `| ${imageSize}px |`;

}

function decreasePic() {
  if (imageSize >= 200 && size >= -150) {
    imageSize -= 5;
    size -= 5;
    paraEl.textContent = "";
  }
  else {
    paraEl.textContent = "Min Width Reached";
  }
  ImgSize.style.width = imageSize + "px";
  numSize.textContent = `| ${imageSize}px |`;
}