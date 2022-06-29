document.addEventListener("keydown", function(e){
    const from_email = document.querySelector("span.gD").getAttribute("email");
    if(e.key === "w");
    return window.location.href=`https://mail.google.com/mail/u/0/#search/${from_email}`;
 });