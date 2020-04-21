var summ = 0;
var Total;
var totalSumm = [];
function TotalConstructor(name,x1,x2,x3,x4,x5,x6,S) {
    this.name = name;
    this.x1 = x1;
    this.x2 = x2;
    this.x3 = x3;
    this.x4 = x4;
    this.x5 = x5;
    this.x6 = x6;
    this.S = S;
}
function generateTableNew (mountains) {
function generateTable(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }
  let table = document.querySelector("table");
  generateTable(table, mountains);
}
function getSum() {
    return document.getElementById("result").innerHTML = summ.toFixed(2);
}
function showResults() {
    document.getElementById("total").style.overflow = "scroll";
    document.getElementById("total").style.display = "block";
}
function showTotal() {
    (function() { summ += +Total.S.toFixed(2) }());
    (function() { totalSumm[totalSumm.length] = Total }());
    generateTableNew(totalSumm);
    getSum();
}
function ductRound() {
    totalSumm = [];
    var diameter = document.getElementById("diam_duct_round").value;
    if(diameter == "") {
        diameter = 100;
    }
    var length = document.getElementById("length_duct_round").value;
    if(length == "") {
        length = 1;
    }
    var result = (diameter/1000) * length * Math.PI;
    document.getElementById("result_duct_round").innerHTML = result.toFixed(2);
    Total = new TotalConstructor("Duct round", diameter, length, "", "", "", "", +result.toFixed(2));
}
function ductFlat() {
    totalSumm = [];
    var width = document.getElementById("widht_duct_flat").value;
    if(width == "") {
        width = 100;
    }
    var height = document.getElementById("height_duct_flat").value;
    if(height == "") {
        height = 100;
    }
    var length = document.getElementById("length_duct_flat").value;
    if(length == "") {
        length = 1;
    }
    var result = (length * (width/1000 + height/1000)) * 2;
    document.getElementById("result_duct_flat").innerHTML = result.toFixed(2);
    Total = new TotalConstructor("Duct rectangular", width, height, length, "", "", "", +result.toFixed(2));
}
function fittingRound() {
    totalSumm = [];
    var diameter = document.getElementById("diam_duct_round_fitting").value;
    if(diameter == "") {
        diameter = 100;
    }
    var angle = document.getElementById("corner").value;
    var x = Math.PI*diameter/1000*0.1;
    switch(angle) {
        case '90':  var z = 2;
                    var s = (Math.PI/2*diameter/2)/(z+2)+15;
                    var sr = Math.PI/2*diameter/(z*2 + 2);
                break;
        case '60':  var z = 2;
                    var s = (Math.PI/3*diameter/2)/(z+2)+15;
                    var sr = Math.PI/3*diameter/(z*2 + 2);
                break;
        case '45':  var z = 0;
                    var s = (Math.PI/4*diameter/2)/(z+2)+15;
                    var sr = Math.PI/4*diameter/(z*2 + 2);
                break;
        case '30':  var z = 0;
                    var s = (Math.PI/6*diameter/2)/(z+2)+15;
                    var sr = Math.PI/6*diameter/(z*2 + 2);
                break;
        case '15':  var z = 0;
                    var s = (Math.PI/12*diameter/2)/(z+2)+15;
                    var sr = Math.PI/12*diameter/(z*2 + 2);
                break;
    }
    var y = (Math.PI * diameter * (2 * (s + sr/2) + z * (s + sr)))/1000000;
    var result = y + x;
    document.getElementById("result_fitting_round").innerHTML = result.toFixed(2);
    Total = new TotalConstructor("Bend round", diameter, angle, "", "", "", "", +result.toFixed(2));
}
function fittingFlat() {
    totalSumm = [];
    var width = document.getElementById("widht_fitting_flat").value;
    if(width == "") {
        width = 100;
    }
    var height = document.getElementById("height_fitting_flat").value;
    if(height == "") {
        height = 100;
    }
    var angle = document.getElementById("angle").value;
    var a = width/1000;
    var b = height/1000;
    var result = ((a+b)*0.2+Math.PI*(((0.125+a)*(0.125+a))-(0.125*0.125))*
    angle*2/360+Math.PI*0.125*angle*b/180+Math.PI*(0.125+a)*angle*b/180);
    document.getElementById("result_fitting_angle").innerHTML = result.toFixed(2);
    Total = new TotalConstructor("Bend rectangular", width, height, angle, "", "", "", +result.toFixed(2));
}
function fittingDoble() {
    totalSumm = [];
    var diameter1 = document.getElementById("fitting_round_more").value;
    if(diameter1 == "") {
        diameter1 = 100;
    }
    var diameter2 = document.getElementById("fitting_round_less").value;
    if(diameter2 == "") {
        diameter2 = 100;
    }
    var length = document.getElementById("length_fitting_round").value;
    if(length == "") {
        length = 300;
    }
    var h = +length/1000;
    var d1 = +diameter1/1000;
    var d2 = +diameter2/1000;
    var result = (Math.PI*Math.sqrt(h*h+((d1-d2)/2)*((d1-d2)/2))*(d1/2+d2/2)+Math.PI*d1*0.05+Math.PI*d2*0.05);
    document.getElementById("result_air_fitting_round").innerHTML = result.toFixed(2);
    Total = new TotalConstructor("Transition round", diameter1, diameter2, length, "", "", "", +result.toFixed(2));
}
function fittingRtoF() {
    totalSumm = [];
    var width = document.getElementById("fitting_round_toFlat_w").value;
    if(width == "") {
        width = 100;
    }
    var height = document.getElementById("fitting_round_toFlat_h").value;
    if(height == "") {
        height = 100;
    }
    var diameter = document.getElementById("fitting_round_toFlatD").value;
    if(diameter == "") {
        diameter = 100;
    }
    var length = document.getElementById("length_fitting_round_toFlat").value;
    if(length == "") {
        length = 300;
    }
    var a = +width/1000;
    var b = +height/1000;
    var d = +diameter/1000;
    var h = +length/1000;
    var D = (2*a+2*b)/Math.PI;
    var ugal = h/((D-d)/2);
    var alfa = Math.atan(ugal)/(Math.PI/180);
    var L = (D/2)/Math.cos(alfa*Math.PI/180);
    var l = (d/2)/Math.cos(alfa*Math.PI/180);
    var x = Math.sqrt(L*L-(a/2)*(a/2));
    var SA = 0.5*x*a;
    var y = Math.sqrt(L*L-(b/2)*(b/2));
    var SB = 0.5*y*b;
    var gamma = 4*Math.asin((a/2)/L)/(Math.PI/180)+4*Math.asin((b/2)/L)/(Math.PI/180);
    var result = 2*SA+2*SB-Math.PI*l*l*gamma/360+(2*a+2*b)*0.05+Math.PI*d*0.05;
    document.getElementById("result_air_fitting_RtoF").innerHTML = result.toFixed(2);
    Total = new TotalConstructor("Transition rectangular-round", width, height, diameter, length, "", "", +result.toFixed(2));
}
function fittingFtoF() {
    totalSumm = [];
    var width1 = document.getElementById("fitting_flat_toFlat_w1").value;
    if(width1 == "") {
        width1 = 100;
    }
    var height1 = document.getElementById("fitting_flat_toFlat_h1").value;
    if(height1 == "") {
        height1 = 100;
    }
    var width2 = document.getElementById("fitting_flat_toFlat_w2").value;
    if(width2 == "") {
        width2 = 100;
    }
    var height2 = document.getElementById("fitting_flat_toFlat_h2").value;
    if(height2 == "") {
        height2 = 100;
    }
    var length = document.getElementById("length_fitting_flat_toFlat").value;
    if(length == "") {
        length = 300;
    }
    var A = +width1/1000;
    var B = +height1/1000;
    var a = +width2/1000;
    var b = +height2/1000;
    var l = +length/1000;
    var ha = Math.sqrt(((B-b)/2)*((B-b)/2)+(l*l));
    var hb = Math.sqrt((A-a)/2*(A-a)/2+l*l);
    var result = (2*(A+a)/2*ha+2*(B+b)/2*hb+(2*a+2*b+2*A+2*B)*0.05);
    document.getElementById("result_air_fitting_FtoF").innerHTML = result.toFixed(2);
    Total = new TotalConstructor("Transition rectangular", width1, height1, width2, height2, length, "", +result.toFixed(2));
}
function fittingTeeR() {
    totalSumm = [];
    var diameter1 = document.getElementById("fitting_tee_d1").value;
    if(diameter1 == "") {
        diameter1 = 100;
    }
    var length1 = document.getElementById("length_tee_L1").value;
    if(length1 == "") {
        length1 = 300;
    }
    var diameter2 = document.getElementById("fitting_tee_d2").value;
    if(diameter2 == "") {
        diameter2 = 100;
    }
    var length2 = document.getElementById("length_tee_L2").value;
    if(length2 == "") {
        length2 = 300;
    }
    var h10 = +diameter1/1000;
    var h11 = +length1/1000;
    var d10 = +diameter2/1000;
    var d11 = +length2/1000;
    var result = Math.PI*d10*h10+Math.PI*d11*h11;
    document.getElementById("result_air_teeR").innerHTML = result.toFixed(2);
    Total = new TotalConstructor("Branch round-round", diameter1, length1, diameter2, length2, "", "", +result.toFixed(2));
}
function teeRtoL() {
    totalSumm = [];
    var diameter = document.getElementById("fitting_tee_RtoL_D").value;
    if(diameter == "") {
        diameter = 100;
    }
    var width1 = document.getElementById("fitting_tee_RtoL_W1").value;
    if(width1 == "") {
        width1 = 300;
    }
    var width2 = document.getElementById("fitting_tee_RtoL_W2").value;
    if(width2 == "") {
        width2 = 100;
    }
    var height = document.getElementById("fitting_tee_RtoL_H").value;
    if(height == "") {
        height = 100;
    }
    var length = document.getElementById("length_tee_RtoL_L").value;
    if(length == "") {
        length = 300;
    }
    var l20 = +width1/1000;
    var d20 = +diameter/1000;
    var a21 = +width2/1000;
    var b21 = +height/1000;
    var l21 = +length/1000;
    var result = Math.PI*d20*l20+(a21+b21)*2*l21;
    document.getElementById("result_air_tee_RtoL").innerHTML = result.toFixed(2);
    Total = new TotalConstructor("Branch round-rectangular", diameter, width1, width2, height, length, "", +result.toFixed(2));
}
function teeLtoR() {
    totalSumm = [];
    var width = document.getElementById("fitting_tee_LtoR_W").value;
    if(width == "") {
        width = 100;
    }
    var height = document.getElementById("fitting_tee_LtoR_H").value;
    if(height == "") {
        height = 100;
    }
    var length1 = document.getElementById("length1_tee_LtoR").value;
    if(length1 == "") {
        length1 = 300;
    }
    var diameter = document.getElementById("fitting_tee_LtoR_D").value;
    if(diameter == "") {
        diameter = 100;
    }
    var length2 = document.getElementById("length2_tee_LtoR").value;
    if(length2 == "") {
        length2 = 200;
    }
    var a30 = +width/1000;
    var b30 = +height/1000;
    var l30 = +length1/1000;
    var d40 = +diameter/1000;
    var l40 = +length2/1000;
    var result = (a30+b30)*2*l30+Math.PI*d40*l40-Math.PI*d40*d40/4;
    document.getElementById("result_air_fitting_LtoR").innerHTML = result.toFixed(2);
    Total = new TotalConstructor("Branch rectangular round", width, height, length1, diameter, length2, "", +result.toFixed(2));
}
function teeLtoL() {
    totalSumm = [];
    var width1 = document.getElementById("fitting_tee_LtoL_W1").value;
    if(width1 == "") {
        width1 = 100;
    }
    var height1 = document.getElementById("fitting_tee_LtoL_H1").value;
    if(height1 == "") {
        height1 = 100;
    }
    var length1 = document.getElementById("length1_tee_LtoL_L1").value;
    if(length1 == "") {
        length1 = 300;
    }
    var width2 = document.getElementById("fitting_tee_LtoL_W2").value;
    if(width2 == "") {
        width2 = 100;
    }
    var height2 = document.getElementById("fitting_tee_LtoL_H2").value;
    if(height2 == "") {
        height2 = 100;
    }
    var length2 = document.getElementById("length2_tee_LtoL_L2").value;
    if(length2 == "") {
        length2 = 200;
    }
    var A50 = +width1/1000;
    var B50 = +height1/1000;
    var L50 = +length1/1000;
    var a60 = +width2/1000;
    var b60 = +height2/1000;
    var l60 = +length2/1000;
    var result = (A50+B50)*2*L50+(a60+b60)*2*l60-a60*b60;
    document.getElementById("result_air_fitting_LtoL").innerHTML = result.toFixed(2);
    Total = new TotalConstructor("Branch rectangular-rectangular", width1, height1, length1, width2, height2, length2, +result.toFixed(2));
}
function ductCapR() {
    totalSumm = [];
    var diameter = document.getElementById("diam_duct_cap_R").value;
    if(diameter == "") {
        diameter = 100;
    }
    var result = Math.PI*diameter*diameter/4000000+(Math.PI*diameter/1000)*0.05;
    document.getElementById("result_cap_R").innerHTML = result.toFixed(2);
    Total = new TotalConstructor("Cap round", diameter, "", "", "", "", "", +result.toFixed(2));
}
function ductCapL() {
    totalSumm = [];
    var width = document.getElementById("diam_duct_cap_L").value;
    if(width == "") {
        width = 100;
    }
    var height = document.getElementById("diam_duct_cap_L").value;
    if(height == "") {
        height = 100;
    }
    var result = width/1000*height/1000+(width*2/1000+height*2/1000)*0.05;
    document.getElementById("result_cap_L").innerHTML = result.toFixed(2);
    Total = new TotalConstructor("Cap rectangular", width, height, "", "", "", "", +result.toFixed(2));
}
function offsetFirst() {
    totalSumm = [];
    var width = document.getElementById("offset_first_w").value;
    if(width == "") {
        width = 100;
    }
    var height = document.getElementById("offset_first_h").value;
    if(height == "") {
        height = 100;
    }
    var length = document.getElementById("offset_first_l").value;
    if(length == "") {
        length = 300;
    }
    var shift = document.getElementById("offset_first_Sh").value;
    if(shift == "") {
        shift = 100;
    }
    var result = ( 2*(width/1000 * Math.sqrt(length/1000 * length/1000 + shift/1000 * shift/1000)+ height/1000 * length/1000 + 0.1 * (width/1000 + height/1000)));
    document.getElementById("offset_first").innerHTML = result.toFixed(2);
    Total = new TotalConstructor("Offset in the 1st plane", width, height, length, shift, "", "", +result.toFixed(2));
}
function offsetTwo() {
    totalSumm = [];
    var width = document.getElementById("offset_two_w").value;
    if(width == "") {
        width = 100;
    }
    var height = document.getElementById("offset_two_h").value;
    if(height == "") {
        height = 100;
    }
    var length = document.getElementById("offset_two_l").value;
    if(length == "") {
        length = 300;
    }
    var shift1 = document.getElementById("offset_two_h1").value;
    if(shift1 == "") {
        shift1 = 100;
    }
    var shift2 = document.getElementById("offset_two_h2").value;
    if(shift2 == "") {
        shift2 = 100;
    }
    var result = ( 2 * ( height/1000 * Math.sqrt( length/1000 * length/1000 + shift2/1000 * shift2/1000 ) + width/1000 * Math.sqrt( length/1000 * length/1000 + shift1/1000 * shift1/1000) + 0.1 * ( width/1000 + height/1000 ) ) );
    document.getElementById("offset_two").innerHTML = result.toFixed(2);
    Total = new TotalConstructor("Offset in two planes", width, height, length, shift1, shift2, "", +result.toFixed(2));
}