// Data keranjang sederhana untuk demo
let cart = JSON.parse(sessionStorage.getItem("cart") || "[]");

function updateCartCount(){
  const el=document.getElementById("cartCount");
  if(el) el.textContent=cart.reduce((total,item)=>total+item.qty,0);
}

function addToCart(name,price){
  const found=cart.find(item=>item.name===name);
  if(found){found.qty++}else{cart.push({name,price,qty:1})}
  sessionStorage.setItem("cart",JSON.stringify(cart));
  updateCartCount();
  alert(name+" ditambahkan ke keranjang.");
}
updateCartCount();
