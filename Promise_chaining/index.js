// Simulating a fake server response
function fetchTodoItems() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const fakeResponse = [
        { id: 1, title: 'Buy groceries' },
        { id: 2, title: 'Complete homework' },
        { id: 3, title: 'Go for a run' }
      ];
    //   reject(fakeResponse);
    }, 1000);
  });
}

function fetchTodoItemDetail(itemId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const fakeDetail = `Detail for item ${itemId}`;
      reject(fakeDetail);
    }, 500);
  });
}

// Fetch and display to-do items
fetchTodoItems()
  .then(todoItems => {
    console.log('Fetched todo items:', todoItems);
    return fetchTodoItemDetail(todoItems[0].id);
  })
  .then(itemDetail => {
    console.log('Fetched item detail:', itemDetail);
    return "Chained Successfully";
    // You can continue chaining more promises here if needed
  })
  .then(value =>{
    console.log("value", value);
  })
  .catch(todoItems => {
    console.error('Error:', todoItems);
    return fetchTodoItemDetail(todoItems[0].id);
  })
  .catch(erval =>{
    console.log("errval", erval);
  })
