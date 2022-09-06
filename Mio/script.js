function print(text){
    document.write(text + "<br>")
}
function encri(texto){
    texto = texto.toLocaleLowerCase()
    testcopy = texto.split("")
    reslist = []
    for (let i in testcopy){
        // print(i) La i son las posiciones
        // print(testcopy[i]) cada elemento de la lista
        if (testcopy[i] == "a"){
            reslist.push("ai")
        }else if (testcopy[i] == "e"){
            reslist.push("enter")
        }else if (testcopy[i] == "i"){
            reslist.push("imes")
        }else if (testcopy[i] == "o"){
            reslist.push("ober")
        }else if (testcopy[i] == "u"){
            reslist.push("ufat")
        }else{
            reslist.push(testcopy[i])
        }
    }
    return reslist.join("")
    }
function desen(texto){
    texto = texto.replaceAll("ai", "a");
    texto = texto.replaceAll("enter", "e");
    texto = texto.replaceAll("imes", "i");
    texto = texto.replaceAll("ober", "o");
    texto = texto.replaceAll("ufat", "u");
    return texto
}
//Basic fucntions

function btndesen(){
    document.getElementById("resField").innerHTML = desen(document.getElementById("getThis").value)
    document.getElementById("getThis").value = ""
    document.getElementById("deleteMe").innerHTML = ""
    document.getElementById("getThis").focus()   
}
function btnen(){
        document.getElementById("resField").innerHTML = encri(document.getElementById("getThis").value)
        document.getElementById("getThis").value = ""
        document.getElementById("deleteMe").innerHTML = ""
        document.getElementById("getThis").focus()   
}

function btncopy(){
    navigator.clipboard.writeText(document.getElementById("resField").innerHTML)
    document.getElementById("getThis").focus() 
}