document.getElementById('donate_btn_1').addEventListener("click", function (event) {
    event.preventDefault();

    const floodNoakhali = document.getElementById('flood_Noakhali').innerText;

    const totalAmountDonate = getInputTextFieldValue('total_Donateamount');
    const totalBalance1 = getInputTextFieldValue('balance_1');
    const donateAmount1 = getDonationAmount('donation_amount_1');

    if (donateAmount1 > totalAmountDonate) {
        alert("You do not have enough money to Donate");
        document.getElementById('donation_amount_1').value = '';
        return;
    }

    if (isNaN(donateAmount1) || donateAmount1 <= 0) {
        alert("Failed to Donate Amount");
        document.getElementById('donation_amount_1').value = '';
        return;
    }

    const sumAmount = totalBalance1 + donateAmount1;
    document.getElementById('balance_1').innerText = sumAmount;

    const newBalance1 = totalAmountDonate - donateAmount1;
    document.getElementById('total_Donateamount').innerText = newBalance1;


    const donationFlood1History = document.createElement('div');
    donationFlood1History.classList.add('bg-gray-500');
    // donationFlood1History.classList.add('bg-gray-500');
    donationFlood1History.classList.add('text-black');
    donationFlood1History.classList.add('rounded');
    donationFlood1History.classList.add('pl-10');
    donationFlood1History.classList.add('space-y-3');
    donationFlood1History.classList.add('mt-3');
    
    const now = new Date();
    donationFlood1History.innerHTML = `
    <h4 class="text-2xl font-bold">${donateAmount1} Taka is ${floodNoakhali}</h4>
    <p>Date: ${now.toString()}</p>`;

    const transactionAdd = document.getElementById('history_container');
    transactionAdd.appendChild(donationFlood1History);

});
