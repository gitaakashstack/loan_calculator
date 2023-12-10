window.addEventListener("DOMContentLoaded",function(){
    document.getElementById("footer").addEventListener("click",calculate);
    document.querySelectorAll("#inputx input").forEach(function(elem){elem.addEventListener("focus",function(){
        $("#output").slideUp(1000);
    });
});

});

function calculate(){
    let loanamt=parseFloat(document.getElementById("loanamt").value);
    let intrst=parseFloat(document.getElementById("interest").value);
    if(isNaN(loanamt)||isNaN(intrst))
    {
        $(".flex-container>p:first-child").show(500);
        window.setTimeout(function(){
            $(".flex-container>p:first-child").hide(500);
        },3000);
        return;
    }
    document.getElementById("gif").style.display="block";
    let years=document.querySelector("input[type=\"number\"]").value;
    let SI=(loanamt*intrst*years)/100;
    let totpayment=SI+loanamt;
    let monpayment=totpayment/(years*12);
    console.log(totpayment);
    document.getElementById("monpay").value=monpayment.toString();
    document.getElementById("totpay").value=totpayment.toString();
    document.getElementById("totint").value=SI.toString();
    window.setTimeout(function(){
        document.getElementById("gif").style.display="none";
        document.getElementById("output").style.display="block";
    },2000)
    
}