document.getElementById('donate_btn_2').addEventListener("click", function (event) {
    event.preventDefault();

    const floodFeni = document.getElementById('flood_feni').innerText;

    const totalAmountDonate = getInputTextFieldValue('total_Donateamount');
    const totalBalance2 = getInputTextFieldValue('balance_2');
    const donateAmount2 = getDonationAmount('donation_amount_2');

    if (donateAmount2 > totalAmountDonate) {
        alert("You do not have enough money to Donate");
        document.getElementById('donation_amount_2').value = '';
        return;
    }

    if (isNaN(donateAmount2) || donateAmount2 <= 0) {
        alert("Failed to Donate Amount");
        document.getElementById('donation_amount_2').value = '';
        return;
    }

    const sumAmount2 = totalBalance2 + donateAmount2;
    document.getElementById('balance_2').innerText = sumAmount2;

    const newBalance2 = totalAmountDonate - donateAmount2;
    document.getElementById('total_Donateamount').innerText = newBalance2;

    const donationFlood1History2 = document.createElement('div');
    donationFlood1History2.classList.add('bg-gray-500');
    // donationFlood1History.classList.add('bg-gray-500');
    donationFlood1History2.classList.add('text-black');
    donationFlood1History2.classList.add('rounded');
    donationFlood1History2.classList.add('pl-10');
    donationFlood1History2.classList.add('space-y-3');
    donationFlood1History2.classList.add('mt-3');
    
    const now = new Date();
    donationFlood1History2.innerHTML = `
    <h4 class="text-2xl font-bold">${donateAmount2} Taka is ${floodFeni}</h4>
    <p>Date: ${now.toString()}</p>`;

    const transactionAdd = document.getElementById('history_container');
    transactionAdd.appendChild(donationFlood1History2);

});