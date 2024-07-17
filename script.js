function generateTable() {
    // Get the input values
    let multiplicand = document.getElementById('Multiplicand').value;
    let multiplier = document.getElementById('Multiplier').value;

    // Parse the input values to integers
    multiplicand = parseInt(multiplicand);
    multiplier = parseInt(multiplier);

    // Check if the input values are valid numbers
    if (isNaN(multiplicand) || isNaN(multiplier)) {
        alert('Please enter valid numbers for both multiplicand and multiplier');
        return;
    }

    // Get the root div to display the table
    let root = document.getElementById('root');

    // Clear any previous content
    root.innerHTML = '';

    // Create a table element
    let table = document.createElement('table');

    // Create table header
    let header = table.createTHead();
    let headerRow = header.insertRow(0);
    let cell1 = headerRow.insertCell(0);
    let cell2 = headerRow.insertCell(1);
    cell1.innerHTML = "<b>Expression</b>";
    cell2.innerHTML = "<b>Result</b>";

    // Generate the multiplication table
    for (let i = 1; i <= multiplier; i++) {
        let row = table.insertRow(i);

        let cell1 = row.insertCell(0);
        cell1.textContent = `${multiplicand} x ${i}`;

        let cell2 = row.insertCell(1);
        cell2.textContent = multiplicand * i;
    }

    // Append the table to the root div
    root.appendChild(table);

    // Make the root div visible
    root.style.display = 'block';
}
