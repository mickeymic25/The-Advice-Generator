const generator_url = "https://api.adviceslip.com/advice";
const btn = document.getElementById("btn");
const getAdvice = async () => {
  try {
    const response = await fetch(generator_url);
    if (response.ok) {
      const data = await response.json();

      const data_displayed = data.slip.advice;
      const data_id = data.slip.id;
      document.querySelector(".advice-id").innerHTML = `Advice ${data_id}`;
      document.querySelector(".advice-text").innerHTML = data_displayed;
    }
  } catch (error) {
    console.log(error);
  }
};
document.addEventListener("DOMContentLoaded", () => {
  getAdvice();
});
btn.addEventListener("click", () => {
  alert("Button pressed, please wait for result..");
  getAdvice();
});
