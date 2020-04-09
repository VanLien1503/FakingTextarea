let arr=["","T","Ô","I","-","S","Ẽ","-","C","H","I","Ế","N","-","T","H","Ắ","N","G","!","!"];
n="";
function typeTextarea() {
        t=document.f.txt.value;
        j=t.length;
        if (j>0){
            for (let i=1;i<=j;i++){
                n+=arr[i];
                if (i == arr.length){
                    document.f.txt.value ="";
                    n="";
                }
            }
        }
        document.f.txt.value=n;
        n="";
        setTimeout("typeTextarea()",1);
}