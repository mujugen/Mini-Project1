function addCard(i, folder_location, container_id) {
  const container = document.getElementById(container_id);
  const cell = document.createElement("div");
  cell.className = "p-2 cell";
  const img = document.createElement("img");
  var img_filename = "images/" + folder_location + "/" + i + ".jpg";
  img.src = img_filename;
  img.className = "cell-img";
  const price = document.createElement("p");
  price.className = "cell-text-title";
  price.textContent = "P60";
  const btn_container = document.createElement("div");
  btn_container.className = "d-flex justify-content-center";
  const btn = document.createElement("button");
  btn.className = "cell-btn";
  btn.textContent = "Buy Now";
  container.append(cell);
  cell.append(img, price, btn_container);
  btn_container.append(btn);
}
