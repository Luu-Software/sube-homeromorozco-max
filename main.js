

boton.addEventListener("click", () => {
  let reg;
  let kilometros;
  let precio;
  let lug;
  lugar= Lugar.value
  reg= registrada.value
  kilometros = distancia.value

if (lugar === "Caba"){
if (reg === "Si reg"){
if (kilometros <=3){
precio = "753,74"}
else if (kilometros <=6){
precio = "837,52"}
else if (kilometros <=12){
  precio = "902,04"}
  else if(kilometros <=27){
  precio = "966,61"}
  else {
    precio = "error";
  }
}
if (reg === "No reg"){
  if (kilometros <=3){
  precio = "1198,45"}
  else if (kilometros <=6){
  precio = "1331,66"}
  else if (kilometros <=12){
    precio = "1434,24"}
    else if(kilometros <=27){
    precio = "1536,91"}
  else {
    precio = "error";
  }
}
  if (reg === "Social"){
    if (kilometros <=3){
    precio = "339,18"}
    else if (kilometros <=6){
    precio = "376,88"}
    else if (kilometros <=12){
      precio = "405,91"}
      else if(kilometros <=27){
      precio = "434,97"}
    else {
      precio = "error";
    }
  }
}


if (lugar === "Provincia"){
  if (reg === "Si reg"){
  if (kilometros <=3){
  precio = "968,57"}
  else if (kilometros <=6){
  precio = "1089,64"}
  else if (kilometros <=12){
    precio = "1210,71"}
    else if(kilometros <=27){
    precio = "1452,85"}
    else {
      precio = "1708,07";
    }
  }
  if (reg === "No reg"){
    if (kilometros <=3){
    precio = "1937,14"}
    else if (kilometros <=6){
    precio = "2179,28"}
    else if (kilometros <=12){
      precio = "2421,42"}
      else if(kilometros <=27){
      precio = "2905,70"}
    else {
      precio = "3416,14";
    }
  }
    if (reg === "Social"){
      if (kilometros <=3){
      precio = "435,85"}
      else if (kilometros <=6){
      precio = "490,33"}
      else if (kilometros <=12){
        precio = "544,81"}
        else if(kilometros <=27){
        precio = "653,78"}
      else {
        precio = "768,63";
      }
    }
  }

  if (lugar === "Coles Nacio"){
    if (reg === "Si reg"){
    if (kilometros <=3){
    precio = "700,00"}
    else if (kilometros <=6){
    precio = "779,78"}
    else if (kilometros <=12){
      precio = "839,86"}
      else if(kilometros <=27){
      precio = "899,99"}
      else {
        precio = " 959,71";
      }
    }
    if (reg === "No reg"){
      if (kilometros <=3){
      precio = "1113,00"}
      else if (kilometros <=6){
      precio = "1239,85"}
      else if (kilometros <=12){
        precio = "1335,38"}
        else if(kilometros <=27){
        precio = "1430,98"}
      else {
        precio = "1525,94";
      }
    }
      if (reg === "Social"){
        if (kilometros <=3){
        precio = "315,00"}
        else if (kilometros <=6){
        precio = "350,90"}
        else if (kilometros <=12){
          precio = "377,93"}
          else if(kilometros <=27){
          precio = "404,99"}
        else {
          precio = "431,86";
        }
      }
    }
  tarifa.innerText = precio;


});
 
