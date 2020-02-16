$(document).ready(function() {

$("#whatToDo").mouseenter(function(){
    $(this).attr("src", "demo-motion.gif");
});
    $("#whatToDo").mouseleave(function(){
    $(this).attr("src", "demo-still.png");
});
}); 