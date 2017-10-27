function tablaGenerar(){
    document.write("<table border='1' cellspacing='1' align  = 'center'>");
    for(var i = 0;i <50;i++){
        document.write("<tr bgcolor='#FFFFFF' height='10' width='10'>");
        for(var j = 0;j<50;j++){
            document.write("<td onmousemove='pintar(event)' height='10' width='10'></td>");
        }
    }
    document.write("</tr></table>");
}


function pintar(event){
    if (event.shiftKey == true){
        event.target.style.backgroundColor = "Blue";
    }
    if (event.ctrlKey == true){
        event.target.style.backgroundColor = "Red";
    }
    
}


