function compute() {
  p = Number(document.getElementById("principal").value);
  rate = Number(document.getElementById("rate").value);
  years = Number(document.getElementById("years").value);
  interest = (p * ((rate * years) / 100)).toFixed(2);
  target_year = new Date().getFullYear() + years;

  result = document.getElementById("result");
  result.innerHTML = `If you deposit ${p},<br/>at an interest rate of ${rate}%.<br\> You will receive an amount of ${interest}, <br/>in the year ${target_year}`;
  document.getElementById("result_wrapper").classList.remove("disable");
}

window.onload = function () {
  function change_value() {
    value = document.getElementById("rate").value;
    document.getElementById("rate_value").innerText = value + " %";
  }

  change_value();
  document.getElementById("rate").addEventListener("input", change_value);
  years_selector = document.getElementById("years");
  for (var i = 1; i <= 50; i++) {
    var option = document.createElement("option");
    option.innerText = i;
    years_selector.appendChild(option);
  }
};
