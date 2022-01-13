var lst;
var search_btn = document.getElementById("search_btn");


$(document).ready( function  (){
    $.ajax({
        url: "https://api.covid19api.com/summary",
        type: "GET",
        dataType: "JSON",
        data: JSON.stringify({ }),
        success: function(data){
            

            //    for all data: 
            console.log(data);
            

            //// for specify country from Countries object:: 
            //    $("#div").append("<p>" + (data.Countries[2]) + "</p>")



            lst=data.Countries;
            // console.log(lst)


         for(var i=0; i<lst.length; i++){                        
             $("#data").append("<tr> <td> " + (lst[i].Country) + "</td> + <td> " + (lst[i].CountryCode) + "</td> + <td> " + (lst[i].NewConfirmed) +   "</td> + <td> " + (lst[i].NewDeaths) +   "</td> + <td> " + (lst[i].TotalConfirmed) + "</td> +  <td> " + (lst[i].TotalDeaths) + "</td> +  <td> " + (lst[i].TotalRecovered) + "</td> </tr> ")
    

             // Console To All Countries Names in Lower Case: 
            //  console.log(lst[i].Country.toLowerCase())

        }
       

search_btn.addEventListener("keyup",        
() =>
{
   let filter = document.getElementById("search_btn").value.toLowerCase();
//    console.log(filter)
   
   let myTable = document.getElementById("table");
   let tr = myTable.getElementsByTagName("tr");
   for(var i=0; i<tr.length; i++){
       let td = tr[i].getElementsByTagName("td")[0];
    //    console.log(td)

       if(td){
           let txtValue = td.textContent || td.innerHTML;

           if(txtValue.toLowerCase().indexOf(filter) > -1){
               tr[i].style.display = "";
           }
           else{
               tr[i].style.display = "none";
           }
       }
   }
}
)



        //   Data Showed in Listing Format: 
                 //   for(var i=0; i<data.Countries.length; i++){
                     //   $("#div").append(" <ul> <li>Country: " + (data.Countries[i].Country) + "</li>  </ul>")
                 //   $("#div").append(" <ul> <li>Country Code: " + (data.Countries[i].CountryCode) + "</li> </ul>")
                 //   $("#div").append(" <ul> <li>Date: " + (data.Countries[i].Date) + "</li> </ul>")
                 //   $("#div").append(" <ul> <li>New Confirmed: " + (data.Countries[i].NewConfirmed) + "</li> </ul>")
                 //   $("#div").append(" <ul> <li>New Deaths: " + (data.Countries[i].NewDeaths) + "</li> </ul>")
                 //   $("#div").append(" <ul> <li>New Recovered: " + (data.Countries[i].NewRecovered) + "</li> </ul>")
                 //   $("#div").append(" <ul> <li>Total Confirmed Deaths: " + (data.Countries[i].TotalConfirmed) + "</li> </ul>")
                 //   $("#div").append(" <ul> <li>Total Deaths: " + (data.Countries[i].TotalDeaths) + "</li> </ul>")
                 //   $("#div").append(" <ul> <li>Total Recovered: " + (data.Countries[i].TotalRecovered) + "</li> </ul> <br>")
                 //   }
                 
                 
                 
            
         }
    })









}
)



