pizzaListArray = [];

function getmenu()
	{    
        // Dê um nome apropriado ao id como pizzaName
        var item = document.getElementById("PizzaName").value; 
       
        //Adicione a função push() para empurrar itens dentro para da array
        pizzaListArray.push(item);
        
        var removeCommas = pizzaListArray.join("<br># ");
        document.getElementById("displayMenu").innerHTML =  "# " + removeCommas;
	}
        menuListArray = [ "Marguerita", "calabresa",      "lombo", "portuguesa", "atum"           
                                          ]; //Adicione mais nomes de pizza

function getmenu()
{
    var htmldata="";
    for(var i=0; i<menuListArray.length; i++)
    {
        htmldata=htmldata+ menuListArray[i] + '<br>'
    }
    //Dê um nome apropriado ao Id, como display Menu 
    document.getElementById("display Menu").innerHTML = htmldata;
}

function add_suggestion(){
    //Dê um nome de id apropriado, como addItem
	var item = document.getElementById("addItem").value;
    //Use a função push() para colocar o item no menuListArray
    menuListArray.push(item);
}
