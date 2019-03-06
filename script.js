function calculateTip(){
    const totalBill = document.getElementById("bill").value;
    const guests = document.getElementById("people").value;
    const service = document.getElementById("service_type").value;
    let tip;
    /* When user didn't input total bill */
    if(totalBill == 0){
        alert("Please enter the total bill!")
    }
    else{
        if(guests > 1){
            tip = (totalBill*service)/guests;
            document.getElementById("tip").innerHTML = `Tip Amount: ${parseFloat(tip).toFixed(2)}$ each`;
        }
        else{
            tip = totalBill*service;
            document.getElementById("tip").innerHTML = `Tip Amount: ${parseFloat(tip).toFixed(2)}$`;
        }
    }
}
    
document.getElementById("calculate").addEventListener("click", calculateTip);
document.getElementById("service_type").addEventListener("change", calculateTip);