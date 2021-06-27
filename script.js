function compute() {
  p = Number(document.getElementById("principal").value);
  rate = Number(document.getElementById("rate").value);
  years = Number(document.getElementById("years").value);
  interest = (p * ((rate * years) / 100)).toFixed(2);
  target_year = new Date().getFullYear() + years;

  if (p <= 0) {
    window.alert("Amount must be positive (and > 0)");
    document.getElementById("principal").focus();
    return;
  }

  result = document.getElementById("result");
  result.innerHTML = `If you deposit <mark>${p}</mark>,<br/>at an interest rate of <mark>${rate}%</mark>.<br\> You will receive an amount of <mark>${interest}</mark>, <br/>in the year <mark>${target_year}</mark>`;
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
