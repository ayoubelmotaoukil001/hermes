function Filter({ setFilter }) {
    return (
      <div>
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Pending")}>Pending</button>
        <button onClick={() => setFilter("Completed")}>Completed</button>
      </div>
    )
  }
  
  export default Filter