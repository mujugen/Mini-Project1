/* Function to create reproducable cells */
function addCard(i, folder_location, container_id) {
  /* Initialize where to put elements */
  const container = document.getElementById(container_id);
  /* Create elements */
  const cell = document.createElement("div");
  const price = document.createElement("p");
  const img = document.createElement("img");
  const btn_container = document.createElement("div");
  const btn = document.createElement("button");
  var img_filename = "/images/" + folder_location + "/" + i + ".jpg";
  /* Set class names */
  cell.className = "p-2 cell";
  img.src = img_filename;
  img.className = "cell-img";
  price.className = "cell-text-title";
  /* Generate random price */
  price.textContent =
    "P" + Math.round((Math.floor(Math.random() * 400) + 200) / 10) * 10;
  btn_container.className = "d-flex justify-content-center";
  btn.className = "cell-btn";
  btn.textContent = "Buy";
  /* Append all created elements */
  container.append(cell);
  cell.append(img, price, btn_container);
  btn_container.append(btn);
}
