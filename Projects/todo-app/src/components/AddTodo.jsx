function AddTodo(){
  return(
  <div class="container text-center">
  
  <div class="row k-row">
    <div class="col-6">
     <input type="text" placeholder="Enter todo list"/>
     </div>
    <div class="col-4"><input type="date"></input></div>
    <div class="col-2"><button type="button" class="btn btn-success k-button">Add</button>
</div>
  </div>
  </div>

  );
}

export default AddTodo;