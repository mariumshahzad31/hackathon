const faqs = document.querySelectorAll(".faq h2");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    const content = faq.nextElementSibling as HTMLElement;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
});
