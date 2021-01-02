image_array=["Fam Image.jpg","Daddy.jpeg","Mom.jpeg","Bro.jpeg","Grandpa.jpeg","Grandma.jpeg","Tau.jpeg","Tai.jpeg","Kiks di.jpeg","Ayush bro.jpeg","Tauji.jpeg","Taiji.jpeg","Nancy di.jpeg","Nishu bhaiya (1).jpeg"];
name_array=["","Sunil Gupta","Ranu Gupta","Parth Gupta","Rajkumar Gupta","Durga Devi Gupta","Surendra Gupta","Sangeeta Gupta","Lakshika Gupta","Ayush Gupta","Chandrabhan Gupta","Anita Gupta","Nancy Gupta","Nitesh Gupta",];
relation_array=["","My Dad","My Mom","My Brother","My Grandpa","My Grandma","My Uncle","My Aunt","My Cousin Sister","My Cousin brother","My Uncle","My Aunt","My Cousin Sister","My Cousin Brother"];
var i=0;
var h=0;
var p=0;
function next(){
   document.getElementById("family_img").src=image_array[i];
   i++;
   if (i>13){
    i=0;
  } 
  document.getElementById("label_name").innerHTML=name_array[h];
  h++;
  if(h>13){
      h=0;
  }
  document.getElementById("label_relation").innerHTML=relation_array[p];
  p++;
  if(p>13){
      p=0;
  }
}