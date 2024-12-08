document.addEventListener("DOMContentLoaded", () => {
    const sortSelect = document.getElementById("sort") as HTMLSelectElement;
  
    sortSelect.addEventListener("change", (event) => {
      const selectedOption = (event.target as HTMLSelectElement).value;
      alert(`Sorting by: ${selectedOption}`);
      // You can add sorting logic here
    });
  });
  