function onWindowLoad() {
    // Get the object element
    var alert_box = document.getElementById('alert').style.display = 'block';
  }  
  // Attach the function to the onload event of the window object
  window.onload = onWindowLoad;

// ---------------------------------------------------
// booking  alert print

function print_alert(){
    var a= document.getElementById("booking_first_name").value;
    var b= document.getElementById("booking_last_name").value;
    var c= document.getElementById("booking_date").value;
    var d= document.getElementById("booking_time_in").value;
    var e= document.getElementById("booking_time_out").value;
    var f= document.getElementById("booking_guests").value;
            {
                var btn=document.getElementById("booking_confirmed").style.display="block";
                var name= document.getElementById("name_booking_print_alert").value= a+ " "+b;
                var date=  document.getElementById("date_booking_print_alert").value=c;
                var in_time= document.getElementById("time_in_booking_print_alert").value= d;
                var out_time= document.getElementById("time_out_booking_print_alert").value= e;
                var guests= document.getElementById("guests_booking_print_alert").value=f;
                
            }   
}


function alert_close(){
  var btn_close=document.getElementById("booking_confirmed").style.display="none";
  var a= document.getElementById("booking_first_name").value="";
  var b= document.getElementById("booking_last_name").value="";
  var c= document.getElementById("booking_date").value="";
  var d= document.getElementById("booking_time_in").value="";
  var e= document.getElementById("booking_time_out").value="";
  var f= document.getElementById("booking_guests").value="";
  var g= document.getElementById("add_info").value="";
  var h= document.getElementById("booking_phone").value="";
  var i= document.getElementById("email_booking").value="";

  }
  // ------------------------------------------------------------------------------------------
