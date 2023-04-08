var listLetters=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 
'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function checkKeyCeaser(key) {
    if(!isNaN(key))
    {
        if (key < 1 || key > 25){
            
            return false;
        }
    }
    else
    {
        return false;
    }   
    return true;
    
}

function Encrypt() {
    let text = document.getElementById("message").value;
    let key =document.getElementById('key').value;
    let encryption = document.getElementById("Encryption-Type").value;
    if (text.length == 0){
        alert("Enter a message!!");
    }
    
    if ( encryption == "Ceaser Cipher")
    {
        CeaserCipherEncrypt(text, key);
    }
    else if (encryption == "Vignere Cipher"){
        VignereCipherEncrypt(text, key);
    }
}

function Decrypt() {
    var text = document.getElementById("message").value;
    var key = document.getElementById('key').value;
    let encryption = document.getElementById("Encryption-Type").value;
    if (text.length == 0){
        alert("Enter a message!!");
    }
    if ( encryption == "Ceaser Cipher")
    {
        CeaserCipherDecrypt(text, key);
    }
    else if (encryption == "Vignere Cipher"){
        VignereCipherDecrypt(text, key);
    }
    
}


// Functions for Ceaser Cipher
function checkKeyCeaser(key) {
    if(!isNaN(key))
    {
        if (key < 1 || key > 25){
            
            return false;
        }
    }
    else
    {
        return false;
    }   
    return true;
    
}

//Function to Encrypt the message using Ceaser Cipher

function CeaserCipherEncrypt(text, key){
    let newText = "";
    if(checkKeyCeaser(key))
    {
        key=parseInt(key);
        for (let letter of text) {
            letter = letter.toLowerCase();
            if(!listLetters.includes(letter)){
                newText += letter;
            }
            else {
                let index = listLetters.findIndex((item) => item === letter);
                let newIndex = index + key;
                if (newIndex>25){
                    newIndex -= 26;
                }
                newText += listLetters[newIndex];
            }
        }
        document.getElementById("heading-encrypt/decrypt-message").innerHTML = "Encryted Message:";
        document.getElementById("Encrypted-Message").value = newText;
    }
    else 
    {        
        var x=alert("Enter a key value between 1 and 25!!");
        if(!x)
            document.getElementById("key").value = "";      
    } 
}

//Function to Decrypt the message using Ceaser Cipher

function CeaserCipherDecrypt(text, key)
{
    let newText = "";
    if(checkKeyCeaser(key)) {
        key=parseInt(key);
        for (let letter of text) {
            letter = letter.toLowerCase();
            
            if(!listLetters.includes(letter)){
                newText += letter;
            }
            else {
                let index = listLetters.findIndex((item) => item === letter);
                let newIndex = index - key;
                if (newIndex<0){
                    newIndex += 26;
                }
                newText += listLetters[newIndex];
            }
        }
        document.getElementById("heading-encrypt/decrypt-message").innerHTML = "Decryted Message:";
        document.getElementById("Encrypted-Message").value = newText;
    }
    else 
    {
        var x=alert("Enter a key value between 1 and 25!!");
        if(!x)    
            document.getElementById("key").value = "";
    }

}

//Functions for Vignere Cipher!!!

//The key should constain only alphabet characters. Function to check for the same.
function checkKeyVignere(key){
    const pattern = /^[a-zA-Z]+$/;
    if(pattern.test(key)){
        return true;
    }
    return false;
}

//Function to Encrypt the message using Vignere Cipher

function VignereCipherEncrypt(text, key){
    let newText = "";
    let i = 0;
    if(checkKeyVignere(key))
    {
        for (let letter of text) {
            letter = letter.toLowerCase();
            key = key.toLowerCase();
            if(!listLetters.includes(letter)){
                newText += letter;
            }
            else {
                let index = listLetters.findIndex((item) => item === letter);
                let newIndex = index + listLetters.findIndex((item) => item === key[i]);
                if (i < key.length - 1){
                    i++;
                }
                else {
                    i = 0;
                }
                if (newIndex>25){
                    newIndex -= 26;
                }
                newText += listLetters[newIndex];
            }
        }
        document.getElementById("heading-encrypt/decrypt-message").innerHTML = "Encryted Message:";
        document.getElementById("Encrypted-Message").value = newText;
    }
    else 
    {        
        var x=alert("Enter a key that has only alphabets!!");
        if(!x)
            document.getElementById("key").value = "";      
    } 
}

//Function to Decrypt the message using Vignere Cipher

function VignereCipherDecrypt(text, key){
    let newText = "";
    let i = 0;
    if(checkKeyVignere(key))
    {
        for (let letter of text) {
            letter = letter.toLowerCase();
            key = key.toLowerCase();
            if(!listLetters.includes(letter)){
                newText += letter;
            }
            else {
                let index = listLetters.findIndex((item) => item === letter);
                let newIndex = index - listLetters.findIndex((item) => item === key[i]);
                if (i < key.length - 1){
                    i++;
                }
                else {
                    i = 0;
                }
                if (newIndex < 0){
                    newIndex += 26;
                }
                newText += listLetters[newIndex];
            }
        }
        document.getElementById("heading-encrypt/decrypt-message").innerHTML = "Decryted Message:";
        document.getElementById("Encrypted-Message").value = newText;
    }
    else 
    {        
        var x=alert("Enter a key that has only alphabets!!");
        if(!x)     
            document.getElementById("key").value = ""; 
    } 
}