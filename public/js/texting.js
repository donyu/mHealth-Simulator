function restartSMS()
{	
	var conversation = $('#conversation');
	conversation.html('');

	var date = new Date();
	var newTime = $('<div class="time"><p>'+ getDate() + '</p></div>');
	newTime.hide();	
	conversation.append(newTime);

	var initText = $('#initText').val();
	var newText = $('<div class="text receive"><div class="reflect"></div><p>' + initText + '</p></div>');
	newText.hide();
	conversation.append(newText);

	newText.show('normal');
	newTime.show('fast');
	scrollDown(conversation);
	$('#imessage').val('');
}

function sendSMS()
{
	var text = $('#imessage').val();
	if(text != '')
	{
		sendText(text);
		receiveText(text);
	}
}
 
function scrollDown(div)
{
	  div.animate({ scrollTop: 10000 }, "slow");
}
 
function sendText(text)
{
	var conversation = $('#conversation');
	var button = $('#send_btn');
 
	var date = new Date();
	var newTime = $('<div class="time"><p>'+ getDate() + '</p></div>');
	newTime.hide();	
	conversation.append(newTime);
 
	var newText = $('<div class="text sent"><div class="reflect"></div><p>' + text + '</p></div>');
	newText.hide();
	conversation.append(newText);
 
	newText.show('normal');
	newTime.show('fast');
	scrollDown(conversation);
	$('#imessage').val('');

	var yesReply = $('#yesReply').val();
	var noReply = $('#noReply').val();
	if (text == yesReply) {
		var date = new Date();
		var newTime = $('<div class="time"><p>'+ getDate() + '</p></div>');
		newTime.hide();	
		conversation.append(newTime);

		var yesText = $('#yesText').val();
		var newText = $('<div class="text receive"><div class="reflect"></div><p>' + yesText + '</p></div>');
		newText.hide();
		conversation.append(newText);

		newText.show('normal');
		newTime.show('fast');
		scrollDown(conversation);
	} else if (text == noReply) {
		var date = new Date();
		var newTime = $('<div class="time"><p>'+ getDate() + '</p></div>');
		newTime.hide();	
		conversation.append(newTime);

		var noText = $('#noText').val();
		var newText = $('<div class="text receive"><div class="reflect"></div><p>' + noText + '</p></div>');
		newText.hide();
		conversation.append(newText);

		newText.show('normal');
		newTime.show('fast');
		scrollDown(conversation);
	}
}
 
function receiveText(smsText)
{
	var button = $('#send_btn');
	var newText = $('<div class="text receive"><div class="reflect"></div><p></p></div>');
	var newImg = $('<div class="text receive"><div class="reflect"></div><p></p></div>');
	newImg.hide();
	newText.hide();
	var conversation = $('#conversation');
	var sender = $('#phone').val();
}
 
function getDate()
{
	var a_p = "";
	var d = new Date();
	var curr_hour = d.getHours();
	if (curr_hour < 12)
	   {
	   a_p = "AM";
	   }
	else
	   {
	   a_p = "PM";
	   }
	if (curr_hour == 0)
	   {
	   curr_hour = 12;
	   }
	if (curr_hour > 12)
	   {
	   curr_hour = curr_hour - 12;
	   }
 
	var curr_min = d.getMinutes();
 
	curr_min = curr_min + "";
 
	if (curr_min.length == 1)
	   {
	   curr_min = "0" + curr_min;
	   }
 
   var m_names = new Array("Jan", "Feb", "Mar", 
   "Apr", "May", "Jun", "Jul", "Aug", "Sep", 
   "Oct", "Nov", "Dec");
 
   var curr_date = d.getDate();
   var curr_month = d.getMonth();
   var curr_year = d.getFullYear();
 
	return m_names[curr_month] + " " + curr_date + ", " + curr_year + ' '+ curr_hour + ":" + curr_min + " " + a_p;
}