Template.IEQuestions.events({
  "submit #ie-form": function(event) {
    event.preventDefault();
    var q1a = $('input[name="q1"]:checked').val();
    var q2a = $('input[name="q2"]:checked').val();
    var q3a = $('input[name="q3"]:checked').val();
    var q4a = $('input[name="q4"]:checked').val();
    var q5a = $('input[name="q5"]:checked').val();
    var q6a = $('input[name="q6"]:checked').val();
    var q7a = $('input[name="q7"]:checked').val();
    if(q1a && q2a && q3a && q4a && q5a && q6a && q7a) {
      var iNum = 0;
      if(q1a === 'a' || q1a === 'b') {
        iNum++;
      }
      if(q2a === 'a') {
        iNum++;
      }
      if(q3a === 'c' || q3a === 'd') {
        iNum++;
      }
      if(q4a === 'c' || q4a === 'd') {
        iNum++;
      }
      if(q5a === 'b') {
        iNum++;
      }
      if(q6a === 'a') {
        iNum++;
      }
      if(q7a === 'a') {
        iNum++;
      }
      Session.set("iNum", iNum);
      Session.set("questions", "JPQuestions");
      window.location = '#';
    } else {
      toastr.error("One of the following fields is missing. Please try again!");
    }
  }
});
