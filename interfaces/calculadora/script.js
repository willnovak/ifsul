var inputs = document.getElementById("numbers");

for(let i = 0; i < 10; i++){

    if(i == 1){
        inputs.innerHTML+=`<input onclick="calcula(id)" id="limpa"  type="button" value="AC"></input>`;
        inputs.innerHTML+=`<input onclick="calcula(id)" id="soma"    type="button" value="+"></input>`;
        inputs.innerHTML+=`<input onclick="calcula(id)" id="subtrai" type="button" value="-"></input>`;
    }

    if(i == 1 || i == 4 || i == 7) {
        inputs.innerHTML+=`<br><input onclick="calcula(`+i+`)" id="num" type="button" class="numero" value="`+i+`"></input>`;
    }

    else{
        inputs.innerHTML+=`<input onclick="calcula(`+i+`)" id="num" type="button" class="numero" value="`+i+`"></input>`;

        if(i == 3){
            inputs.innerHTML+=`<input onclick="calcula(id)" id="multi" type="button" value="X"></input>`;
        }
        else if(i == 6){
            inputs.innerHTML+=`<input onclick="calcula(id)" id="divis" type="button" value="/"></input>`;
        }
        else if(i == 9){
            inputs.innerHTML+=`<input onclick="calcula(id)" id="calc"  type="button" value="="></input>`;
        }
    }

}

function calcula(val){
    console.log(val);
}

