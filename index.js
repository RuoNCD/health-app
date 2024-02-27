function calculate_daily_water_need() {
    var kilo = document.getElementById("ent-kilo");
    var tempo = document.getElementById("activity")
    var water = document.querySelector(".per-day-water");
    var cup = document.querySelector(".per-day-cup");
    var topDiv = document.querySelector(".top");
    var bottomDiv = document.querySelector(".bottom");
    if (kilo.length === 0) {
        return;
    }
    let count = tempo.value === "1" ? 30 : (tempo.value === "2" ? 33 : 35);
    let result = (parseFloat(kilo.value) * count);
    result = result.toFixed(0);
    let resultl = result / 1000;
    resultl = resultl.toFixed(1);
    let resultc = result / 250;
    resultc = resultc.toFixed(0);
    water.innerHTML = `<b>Günlük Su İhtiyacınız: </b>${result} ml/gün (${resultl} litre/gün)`;
    cup.innerHTML = `<b>Bardak: </b>${resultc} bardak (250ml'lik)`;
    bottomDiv.style.display = "block";
    topDiv.style.display = "none";
}

function val(event) {
    var input = event.target.value;
    // Son girilen karakteri al
    var lastChar = input.slice(-1);
    // Eğer son girilen karakter bir harf veya özel karakter ise, inputu temizle
    if (!/^\d$/.test(lastChar)) {
        event.target.value = input.slice(0, -1); // Son karakteri sil
    }
    if (input.length > 3) {
        event.target.value = input.slice(0, -1); // Son karakteri sil
    }
}