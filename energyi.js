function realizar() {

    let MassOfBlock = document.getElementById("masst").value;
	let CoefficientOfFriction = document.getElementById("fric").value;
	let LengthOfIncline = document.getElementById("distt").value;
	let AngleOfIncline = document.getElementById("angf").value;
	
	if (MassOfBlock > 0 && CoefficientOfFriction > 0 && LengthOfIncline > 0 && AngleOfIncline > 0) {
		let LengthOfInclineinm = LengthOfIncline/100;
		let angrad = AngleOfIncline*Math.PI/180;
		let ForceGravity = MassOfBlock*9.8;
		let ForceGravityY = ForceGravity*Math.cos(angrad);
		let ForceFriction = ForceGravityY*CoefficientOfFriction;
		let StartHeight = LengthOfInclineinm*Math.sin(angrad);
		let PEg = ForceGravity*StartHeight;
		let Heat = ForceFriction*LengthOfInclineinm;
		let KE = Math.abs(PEg - Heat);
		let FinalSpeedSquared = 2*KE/MassOfBlock;
		let FinalSpeed = (Math.pow(FinalSpeedSquared, 0.5)).toFixed(2);
	
		document.getElementById("compcm").innerHTML = `DISTANCIA EM METROS = ${LengthOfIncline} ÷ 100 = ${LengthOfIncline}`;
		document.getElementById("angr").innerHTML = `ANGULO RADIANO = ${AngleOfIncline} × (π ÷ 180) = ${angrad}`;
		document.getElementById("forceg").innerHTML = `FORÇA GRAVITACIONAL = ${MassOfBlock} × 9.8 = ${ForceGravity}`;
		document.getElementById("forcegy").innerHTML = `FORÇA GRAVITACIONAL Y = ${ForceGravity} × COS(${angrad}) = ${ForceGravityY}`;
		document.getElementById("forcef").innerHTML = `FORÇA ATRITO = ${ForceGravityY} × ${CoefficientOfFriction} = ${ForceFriction}`;
		document.getElementById("start").innerHTML = `INICIO = ${LengthOfIncline} × SIN(${angrad}) = ${StartHeight}`;
		document.getElementById("potg").innerHTML = `POTENCIAL GRAVITACIONAL = ${ForceGravity} × ${StartHeight} = ${PEg}`;
		document.getElementById("heat").innerHTML = `CALOR = ${ForceFriction} × ${LengthOfInclineinm} = ${Heat}`;
		document.getElementById("cinet").innerHTML = `CINETICA = |${PEg} - (${Heat})| = ${KE}`;
		document.getElementById("speed2").innerHTML = `VELOCIDADE² = 2 × ${KE} ÷ ${MassOfBlock} = ${FinalSpeedSquared}`;
		document.getElementById("speed").innerHTML = `VELOCIDADE = √${FinalSpeedSquared} = ${FinalSpeed}`;
		
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

    document.getElementById("masst").value = "";
    document.getElementById("fric").value = "";
    document.getElementById("distt").value = "";
    document.getElementById("angf").value = "";
    
}