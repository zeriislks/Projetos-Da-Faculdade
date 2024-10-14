function calculateTax() {
    const regNumber = document.getElementById("regNumber").value;
    const name = document.getElementById("name").value;
    const salary = parseFloat(document.getElementById("salary").value);
    let tax = 0;

    // Cálculo do imposto de acordo com as faixas de renda
    if (salary <= 22847.76) {
        tax = 0; // Isento
    } else if (salary <= 33919.80) {
        tax = (salary - 22847.76) * 0.075;
    } else if (salary <= 45012.60) {
        tax = (salary - 33919.80) * 0.15 + 828.39;
    } else if (salary <= 55976.16) {
        tax = (salary - 45012.60) * 0.225 + 2104.58;
    } else {
        tax = (salary - 55976.16) * 0.275 + 4621.29;
    }

    // Exibe o resultado
    document.getElementById("result").innerHTML = `
        <p><strong>Número de Registro:</strong> ${regNumber}</p>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Imposto devido:</strong> R$ ${tax.toFixed(2)}</p>
    `;
}