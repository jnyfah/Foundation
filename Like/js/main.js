console.log('it works')

  $(document).ready(function() {
	  $('.submit_btn').click( function(event) {
		  
		  console.log('Clicked button')
		  
		  var name = $('.name').val()
		  var email = $('.email').val()
		  var subject = $('.subject').val()
		  var message = $('.msg').val()
		  var statuseln = $('.status')
		  statuseln.empty()
		  var statusn = $('.status1')
		  statusn.empty()
		  var statuse = $('.status2')
		  statuse.empty()
		  var statuss = $('.status3')
		  statuss.empty()
		  
		  
		  if (email.length > 5 && email.includes('@') && email.includes('.')){
			  
		  }else{
			  event.preventDefault()
			  statuse.append('<div>no email, no message</div>')
		  }
		  
		   if (subject.length > 3 ){
			 
		  }else{
			  event.preventDefault()
			  statuss.append('<div>come on, you have a subject, dont you?</div>')
		  }
		  
		   if (name.length > 2){
		
		  }else{
			  event.preventDefault()
			  statusn.append('<div>come on, you have a name, dont you?</div>')
		  }
		  
		  if (message.length > 10){
			 
		  }else{
			  event.preventDefault()
			  statuseln.append('<div>um...yea, you have to write something to send this form.</div>')
		  }
		  
		  
			  
	  })
  })