function calculatePayroll() {
    // Prendi i valori dai campi di input
    let hour = document.getElementById('hour').value;
    let gross = document.getElementById('gross').value;
    var tronc = document.getElementById('tronc').value;
    var vat = document.getElementById('vat').value;

    // Verifica se tutti i valori sono stati inseriti
    if (hour === '' || gross === '' || tronc === '' || vat === '') {
        alert('Inserisci entrambi i numeri.');
        return;
    }

    // Esegui le operaioni
    let minWPH = 0;
    let troncPH = 0;
    let totPH = 0;
    let totLord = 0;
    let totNet = 0;

    minWPH = Number(gross) / Number(hour);
    troncPH = Number(tronc) / Number(hour);
    totPH = Number(minWPH) + Number(troncPH);
    totLord = Number(gross) + Number(tronc);
    totNet = Number(totLord) - Number(vat);


    // Stamp il risultato nell'elemento con classe .output
    document.getElementById('mW').textContent = "Minimum Wage: " + minWPH;
    document.getElementById('troncPH').textContent = "Tronc x/h: " + troncPH;
    document.getElementById('totGross').textContent = "Tot Gross: " + totLord;
    document.getElementById('totNet').textContent = "Tot Net: " + totNet;
}