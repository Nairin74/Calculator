function clrAll()
{
    let txtBox = document.getElementById("txtBox");
    txtBox.value =" ";
}

function backSpace(){
    let txtBox = document.getElementById("txtBox").value;
    document.getElementById("txtBox").value = txtBox.substring(0, txtBox.length-1)
}

function key(e){
    let txtBox = document.getElementById("txtBox");
    txtBox.value += e.value;
}

function keyEqual(e){
    let txtBox = document.getElementById("txtBox");
    txtBox.value = eval(txtBox.value)
}