function TodoIteam1(){
  let todoName="meeting"
  let todoDate="2/12/2023"
  return (<div class="container ">
  
 
  <div class="row k-row">
    <div class="col-6">
    {todoName}
     </div>
    <div class="col-4">{todoDate}</div>
    <div class="col-2"><button type="button" class="btn btn-danger k-button">Delete</button>
</div>
  </div>
  </div>
  );

}

export default TodoIteam1;