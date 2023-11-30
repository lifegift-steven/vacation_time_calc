document.getElementById('calculateButton').addEventListener('click', function() {
    const hireDate = document.getElementById('hireDate').value;
    const availTime = document.getElementById('availTime').value;

    // Your logic to calculate and get the result
    const calculatedResult = "Your calculated result"; // Replace with your actual result

    // Display the result in the pop-up container
    document.getElementById('resultPopup').style.display = 'block';
    document.getElementById('resultUrl').innerText = `Est. Date to Hit Max: ${calculatedResult}`;
});
