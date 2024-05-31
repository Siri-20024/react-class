
  
  
   
    
      
   import Image1,{Image3,Image4} from "./image-components.js" 
    // import Image2 from"./image-components.js"
    // import Image3 from"./image-components.js"
    //  import Image4 from"./image-components.js"
     
     
        function TableComponents(){
      return( 

        <div>
            <table>
               <tr>
                  <td>Id</td>
                  <td>Title</td> 
                   <td>Price</td> 
                   <td>Image</td>
              </tr>   

             <tr>
               <td>1</td>
               <td>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</td>
               <td>109.95</td>
                 <td><Image1></Image1></td> 
                   
              </tr>  
 
             {/* <tr> 
               
               <td>2</td> 
               <td>Mens Casual Premium Slim Fit T-Shirts </td>
               <td>22.3</td>
               <td><Image2></Image2></td> 
             </tr> */}

             <tr> 
               
               <td>3</td> 
               <td>Mens Cotton Jacket</td>
               <td>55.99</td>
                <td><Image3></Image3></td> 
             </tr>

             <tr> 
               
               <td>4</td> 
               <td>Mens Casual Slim Fit</td>
               <td>15.99</td>
               <td><Image4></Image4></td> 
             </tr>
              
              </table>
            </div>
      )} 
       
   export default TableComponents   