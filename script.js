
// Add your custom JavaScript logic here
document.getElementById("calculate-btn").addEventListener("click", function() {
    const ipAddress = document.getElementById("ip-address").value;
    const subnetMask = document.getElementById("subnet-mask").value;

    // Perform IP address calculations (not implemented in this example)
    // Replace the following lines with your actual logic
    const classInfo = "Class A";
    const networkRange = "10.0.0.1 - 10.255.255.254";
    const networkNumber = "10.0.0.0";
    const hostNumber = "1";

    // Display results
    document.getElementById("results").innerHTML = `
        <p>IP Address: ${ipAddress}</p>
        <p>Subnet Mask: ${subnetMask}</p>
        <p>Class: ${classInfo}</p>
        <p>Network Range: ${networkRange}</p>
        <p>Network Number: ${networkNumber}</p>
        <p>Host Number: ${hostNumber}</p>
    `;
});
