var nama = prompt('Siapa Namamu ?'); // menampilkan pada bagian web
var studentWish = prompt("masuk Universitas gak ?") // studentWish pemberian var  

if(studentWish === "mau") {
    
    var chanceGetUniv = Math.random() * 100
    chanceGetUniv = Math.floor(chanceGetUniv)
    var nilai = prompt("BERAPA KAH NILAI AKHIR SMA/SMK mu ? ?")
    
    if(nilai < 30) {
    alert("Tidak mungkin masuk univ ")
    }
    else if(nilai < 50) {
        
        if (changeGetUniv < 50){
            alert("hmm kemungkinan kamu " + nama + " kecil masuk UNIV") 
        }
        else{
            alert("hmm kemungkinan kamu " + nama + " bisa masuk UNIV") 
        }
    }
    else{
        
        var chanceGetUniv = Math.random() * 100
        chanceGetUniv = Math.floor(chanceGetUniv)
        var nilai = prompt("BERAPA KAH NILAI AKHIR SMA/SMK mu ? ?")

        if(chanceGetUniv > 70 && nilai > 60) {
            alert("hei" + nama + "pasti masuk UNIV dengan" + nilai + "mu yang besar itu") 
        }
        else if(chanceGetUniv > 70 && nilai > 80) {
            alert("hei" + nama + "pasti masuk UNIV dengan" + nilai + "mu yang besar itu") 
        }
    }
    
} 
else {
    alert("okedeh goodluck Terserah Lu!")
}

