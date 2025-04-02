function converter() {
    let cover = parseFloat(document.getElementById('cover').value);
    let escolha = document.getElementById('currency').value;
    let euroc = cover / 6.14;
    let librac = cover / 7.45;
    let dolac = cover / 5.75;

    let resultado;

    if (isNaN(cover) || cover < 0.01) {
        alert("!INSIRA VALORES VÁLIDOS");
        return;
    }

    switch (escolha) {
        case "USD":
            resultado = `Conversão em dólar: ${dolac.toFixed(2)} USD <img src="estados-unidos.png" alt="Bandeira dos EUA" style="width: 20px; height: auto;">`;
            break;
        case "EUR":
            resultado = `Conversão em Euro: ${euroc.toFixed(2)} EUR <img src="uniao-europeia.png" alt="Bandeira da União Europeia" style="width: 20px; height: auto;">`;
            break;
        case "GBP":
            resultado = `Conversão em Libra: ${librac.toFixed(2)} GBP <img src="reino-unido.png" alt="Bandeira do Reino Unido" style="width: 20px; height: auto;">`;
            break;
        default:
            resultado = "Selecione uma moeda válida.";
    }

    document.getElementById('resultado').innerHTML = resultado;
}
