function enviar() {
    let AngleOfForce = document.getElementById("angf").value;
    let ActualForce = document.getElementById("actf").value;
    let MassTable = document.getElementById("masst").value;
    let DistanceTraveledcm = document.getElementById("distt").value;

    if (AngleOfForce > 0 && ActualForce > 0 && MassTable > 0 && DistanceTraveledcm > 0) {

        let coefficientoffriction = 0.0;
        let AngleinRad = AngleOfForce * Math.PI / 180;
        let ForceGravity = MassTable * 9.8;
        let DistanceTraveled = DistanceTraveledcm / 100;
        let ForceTensionX = ActualForce * Math.cos(AngleinRad);
        let ForceTensionY = ActualForce * Math.sin(AngleinRad);
        let ForceY = ForceGravity - ForceTensionY;
        let ForceFriction = coefficientoffriction * ForceY;
        let ForceX = ForceTensionX - ForceFriction;
        let Acceleration = ForceX / MassTable;
        let WorkByTension = ForceTensionX * DistanceTraveled;
        let WorkByFriction = ForceFriction * DistanceTraveled;
        let WorkToKE = WorkByTension - WorkByFriction;
        let SpeedOfBox = Math.pow(WorkToKE * 2.0 / MassTable, 0.5);

        let answer1 = (WorkByTension).toFixed(2);
        let answer2 = (SpeedOfBox).toFixed(2);
        let answer3 = (ForceY).toFixed(2);

        document.getElementById("angr").innerHTML = `ANGULOrad = ${AngleOfForce} × (π ÷ 180) = ${AngleinRad}`
        document.getElementById("forceg").innerHTML = `FORÇAg = ${MassTable} × 9.8 = ${ForceGravity}`
        document.getElementById("distd").innerHTML = `DISTANCIAm = ${DistanceTraveledcm} ÷ 100 = ${DistanceTraveled}`
        document.getElementById("forcetx").innerHTML = `FORÇATx = ${ActualForce} × COS(${AngleinRad}) = ${ForceTensionX}`
        document.getElementById("forcety").innerHTML = `FORÇATy = ${ActualForce} × SIN(${AngleinRad}) = ${ForceTensionY}`
        document.getElementById("forcex").innerHTML = `FORÇAx = ${ForceTensionX} - ${ForceFriction} = ${ForceX}`
        document.getElementById("forcey").innerHTML = `FORÇAy / FORÇA NORMAL = ${ForceTensionY} - ${ForceGravity} = ${answer3}`
        document.getElementById("forcef").innerHTML = `FORÇAf = ${coefficientoffriction} × ${ForceY} = ${ForceFriction}`
        document.getElementById("xlr8").innerHTML = `ACELERAÇÃO = ${ForceX} ÷ ${MassTable} = ${Acceleration}`
        document.getElementById("workt").innerHTML = `TRABALHOt = ${ForceTensionX} × ${DistanceTraveled} = ${WorkByTension}`
        document.getElementById("workf").innerHTML = `TRABALHOf = ${ForceFriction} × ${DistanceTraveled} = ${WorkByFriction}`
        document.getElementById("worktt").innerHTML = `TRABALHOTt = ${WorkByTension} - ${WorkByFriction} = ${answer1}`
        document.getElementById("speed").innerHTML = `VELOCIDADE = √(2 × ${WorkToKE} ÷ ${MassTable}) = ${answer2}`

        document.getElementById("saida").style.display = "flex";
        document.getElementById("entrada").style.display = "none";

    }
    else {
        alert("DIGITE TODOS OS VALORES")
    }
}

function voltar() {

    document.getElementById("entrada").style.display = "flex";
    document.getElementById("saida").style.display = "none";

    document.getElementById("angf").value = "";
    document.getElementById("actf").value = "";
    document.getElementById("masst").value = "";
    document.getElementById("distt").value = "";

}



