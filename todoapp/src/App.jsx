function App() {
  return (
    <center class="to-do container">
      <h1>TO DO App</h1>

      <div class="container text-center">
        <div class="row">
          <div class="col-6">
            <input type="text" placeholder="Enter your todo" />
          </div>
          <div class="col-4"><input type="date" /></div>
          <div class="col-2"><button type="button" class="btn btn-success">Add</button></div>
        </div>
      </div>

      <div class="container text-center">
        <div class="row">
          <div class="col-6">
           Buy a new car
          </div>
          <div class="col-4">10/09/2024</div>
          <div class="col-2"><button type="button" class="btn btn-danger">Delete</button></div>
        </div>
      </div>

      <div class="container text-center">
        <div class="row">
          <div class="col-6">
           outing with team
          </div>
          <div class="col-4">11/09/2024</div>
          <div class="col-2"><button type="button" class="btn btn-danger">Delete</button></div>
        </div>
      </div>

    </center>
  );
}
export default App;
