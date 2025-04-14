// Ration card Management system using  Has method.. 
function rationcardSpecial(allcard,user,spacilcard){
    let spacilcardnumber = new Set(allcard)

    if(spacilcardnumber.has(user)){
        return `you have a special catagory`
    }
    return `no your card number not avaiable in this porgam`
}

