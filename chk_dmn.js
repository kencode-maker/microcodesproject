






function check_domain(){

var strmsg ,tld ,sld;


         $.ajax({ type: "POST" ,
            url: 'https://localhost/microcodes/check_domain.php',
            dataType: 'json',
		beforeSend: function(){ alert("fetching");       },	
          success: function(data) {
			
			strmsg=data.strMessage;
			tld=data.tld;
			sld=data.tld;
				

		   var html="";
		   var results=$("#domain_results");
		  
	for(var i=0; i< data.length; i++){
html+='<div style="padding:10px;"> ';
html+='<h5>'+tld+'+'+sld+'</h5>';
html+='<h4 class="modal-title" id="myModalLabel">$ 19.00</h4>  ';
html+='<button style="border-radius:5px;padding:10px;" onclick="add_to_cart()">Add to cart</button> ';
html+='<a href="sign_up.html" style="background-color:blue;color:white;border:none;padding:10px;" >Buy Now</a> ';
html+='<hr  style="background-color:black; ">';
html+='</div>';
			results.html(html);
			
            }
			
			}
        });

 

}





function send_message()
 { 
 
 event.preventDefault();

  var name= $("#name").val();
  var email= $("#email").val();
 var subject= $("#subject").val();
 var message= $("#message").val();


  var msg_form = new FormData();
  
 msg_form.append("name", name);
 msg_form.append("email", email);
 msg_form.append("subject", subject);
 msg_form.append("message", message);

	
 
//var form = $("#sign_up_form").serialize();
 
$.ajax({
        type: "POST" ,
	enctype: 'multipart/form-data',
        url: "send_message.php" ,
        data: msg_form,
        contentType: false,
	processData: false,
		
		beforeSend: function(){  alert("sending ");
		
		},
		
        success:function(data){
		
            alert(data); 
			
        }
				      
     });
	 
	 
 }


function add_to_cart()
 { 
 
 event.preventDefault();
  var user_name= $("#user_name").val();
  var name= $("#product_name").val();
  var price= $("#price").val();



  var cart_form = new FormData();
  
 cart_form.append("user_name", user_name);
 cart_form.append("product_name", product_name);
 cart_form.append("price ", price );


	
 
//var form = $("#sign_up_form").serialize();
 
$.ajax({
        type: "POST" ,
	enctype: 'multipart/form-data',
        url: "add_to_cart.php" ,
        data: cart_form,
        contentType: false,
	processData: false,
		
		beforeSend: function(){  alert("sending ");
		
		},
		
        success:function(data){
		
            alert(data); 
			
        }
				      
     });
	 
	 
 }