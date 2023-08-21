function realizar() {
    let MassOfBall = document.getElementById("mass").value;
	let AccelerationDueToGravity = document.getElementById("grav").value;
	let v1o = document.getElementById("speed").value;
    
    if (v1o > 0 && AccelerationDueToGravity > 0 && MassOfBall > 0) {
	let timetotop = v1o/AccelerationDueToGravity;
	let MaxHeightGained = Math.pow(v1o, 2.0)/(2*AccelerationDueToGravity);
	let Verticalcm = (MaxHeightGained*100).toFixed(2);
	let KE = 0.5*(MassOfBall/1000)*v1o*v1o;
	let MaximumEnergy = (KE).toFixed(2);

    document.getElementById("time").innerHTML = `TEMPO = ${v1o} ÷ ${AccelerationDueToGravity} = ${timetotop}`
    document.getElementById("vert").innerHTML = `ALTURA EM CM = ${MaxHeightGained} × 100 = ${Verticalcm}`
    document.getElementById("alt").innerHTML = `ALTURA = ${v1o}² ÷ ( 2 × ${AccelerationDueToGravity} ) = ${MaxHeightGained}`
    document.getElementById("cinet").innerHTML = `ENERGIA = 0.5 × ( ${MassOfBall} ÷ 1000) × ${v1o} × ${v1o} = ${MaximumEnergy}`
    
    document.getElementById("saida").style.display = "flex";
    document.getElementById("entrada").style.display = "none";
    }
    else{
        alert("DIGITE TODOS OS VALORES")
    }
}

function voltar() {

    document.getElementById("entrada").style.display = "flex";
    document.getElementById("saida").style.display = "none";

    document.getElementById("mass").value = "";
    document.getElementById("grav").value = "";
    document.getElementById("speed").value = "";
     
}