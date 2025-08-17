function getDonationAmount(id){
    const amount = document.getElementById(id).value;
    const amountNum = parseFloat(amount);
    return amountNum;
}

function getInputTextFieldValue(id){
    const textValue = document.getElementById(id).innerText;
    const textVlueNum = parseFloat(textValue);
    return textVlueNum;
}

function showSectionById(id){
    document.getElementById('donation_container').classList.add('hidden');
    document.getElementById('history_container').classList.add('hidden');
    // document.getElementById('notification_container').classList.add('hidden');
    
    // show the section with the provided id as parameter
    document.getElementById(id).classList.remove('hidden');
}