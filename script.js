var taskcount = 0;


$("form").submit(function (event) {
    event.preventDefault();
    taskcount++;
    var taskName = $("#taskName").val();
    var taskDueDate = $("#taskDueDate").val();
    var taskAction = $("action").val();
    var taskAction = $("action").val()
    $("tbody").append(`
    <tr>
        <th scope="row">1</th>
        <td class = "text">${taskName}</td>
        <td>${taskDueDate}</td>
        <td>

            <i class="fas fa-check"></i>
            <i class="far fa-edit"></i>
            <i class="fas fa-trash"></i>
        </td>
    </tr> `)

   $("form")[0].reset();  /////clears the form

   function activateCheckBox(){
       $("fa-check").click(function(){
           $("tr").class
        
       })
   }

})


