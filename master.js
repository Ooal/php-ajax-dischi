function getInitCall (){

  $.ajax({
      url: 'server.php',
      method: 'GET',
      success: function(data) {
        var success = data['success'];
        var arrayCds = data['response'];

        selezioneAutore(arrayCds);
        for (var i = 0; i < arrayCds.length; i++) {
            var template = $('#template').html();
            var compiled = Handlebars.compile(template);
            var target = $('#cds-container');
            var cdHtml = compiled(arrayCds[i]);
            target.append(cdHtml);
        }
      }/*,
      error: function(request, state, error) {
        var error = request['statusText'];
        alert('Attenzione ' + error);
      }*/
    });

  }

  function selezioneAutore(array){
    $('#btn').click(function(){
     cd(array);
   });
  }
function cd (array) {
  $('#cds-container .cd').remove();
  var autoreInput =$('#autore').val();
  for (var i = 0; i < array.length; i++) {
    var autoreObj = array[i].author;
    if (autoreObj == autoreInput) {
      var template = $('#template').html();
      var compiled = Handlebars.compile(template);
      var target = $('#cds-container');
      var cdHtml = compiled(array[i]);
      target.append(cdHtml);
    }
  }
}



function init() {
 getInitCall();
}
$(document).ready(init);
