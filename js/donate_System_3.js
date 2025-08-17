document.getElementById('donate_btn_3').addEventListener("click", function (event) {
    event.preventDefault();

    const quotaMovement = document.getElementById('quota_movement').innerText;

    const totalAmountDonate = getInputTextFieldValue('total_Donateamount');
    const totalBalance3 = getInputTextFieldValue('balance_3');
    const donateAmount3 = getDonationAmount('donation_amount_3');

    if (donateAmount3 > totalAmountDonate) {
        alert("You do not have enough money to Donate");
        document.getElementById('donation_amount_3').value = '';
        return;
    }

    if (isNaN(donateAmount3) || donateAmount3 <= 0) {
        alert("Failed to Donate Amount");
        document.getElementById('donation_amount_3').value = '';
        return;
    }

    const sumAmount3 = totalBalance3 + donateAmount3;
    document.getElementById('balance_3').innerText = sumAmount3;

    const newBalance3 = totalAmountDonate - donateAmount3;
    document.getElementById('total_Donateamount').innerText = newBalance3;

    const donationFlood1History3 = document.createElement('div');
    donationFlood1History3.classList.add('bg-gray-500');
    // donationFlood1History.classList.add('bg-gray-500');
    donationFlood1History3.classList.add('text-black');
    donationFlood1History3.classList.add('rounded');
    donationFlood1History3.classList.add('pl-10');
    donationFlood1History3.classList.add('space-y-3');
    donationFlood1History3.classList.add('mt-3');
    
    const now = new Date();
    donationFlood1History3.innerHTML = `
    <h4 class="text-2xl font-bold">${donateAmount3} Taka is ${quotaMovement}</h4>
    <p>Date: ${now.toString()}</p>`;

    const transactionAdd = document.getElementById('history_container');
    transactionAdd.appendChild(donationFlood1History3);

});