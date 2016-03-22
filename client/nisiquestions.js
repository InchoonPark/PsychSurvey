Template.NiSiQuestions.events({
  "submit #nisi-form": function(event) {
    event.preventDefault();
    var q1a = $('input[name="q1"]:checked').val();
    var q2a = $('input[name="q2"]:checked').val();
    var q3a = $('input[name="q3"]:checked').val();
    var q4a = $('input[name="q4"]:checked').val();
    var q5a = $('input[name="q5"]:checked').val();
    var q6a = $('input[name="q6"]:checked').val();
    var q7a = $('input[name="q7"]:checked').val();
    if(q1a && q2a && q3a && q4a && q5a && q6a && q7a) {
      var niNum = 0;
      if(q1a === 'b') {
        niNum++;
      }
      if(q2a === 'b') {
        niNum++;
      }
      if(q3a === 'b') {
        niNum++;
      }
      if(q4a === 'b') {
        niNum++;
      }
      if(q5a === 'b') {
        niNum++;
      }
      if(q6a === 'a') {
        niNum++;
      }
      if(q7a === 'b') {
        niNum++;
      }
      Session.set("nNum", niNum);
      if(Session.get("iNum") > 3) {
        Session.set("questions", "TeFeQuestions");
      } else {
        Session.set("questions", "Result");
      }
      window.location = '#';
    } else {
      toastr.error("One of the following fields is missing. Please try again!");
    }
  }
});
