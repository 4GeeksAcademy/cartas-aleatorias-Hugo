import "./style.css";

window.onload = () => {
  document.querySelector('.card').classList.add(nuevoPaloRandom());
  document.querySelector('.card').innerHTML = nuevoNumeroRandom();
 };

let nuevoNumeroRandom= ()=>{
  let numero = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
  let indexNumero = Math.floor(Math.random() * numero.length);
  
  return numero[indexNumero];
};

let nuevoPaloRandom= ()=>{
  let palo = ["diamantes","espadas","corazones","picas"];
  let indexPalo = Math.floor(Math.random() * palo.length);

  return palo[indexPalo];
};
