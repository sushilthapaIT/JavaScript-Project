function testing(){
    var input1 = document.getElementById("testing");
    var input2 = document.getElementById("testing1");
    var output = input1.value * input2.value;

    var output1 = document.getElementById("output1")
    output1.innerText = `<p style="color:red;">${output}</p>`


    console.log("Hello",input1)
}