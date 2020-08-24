// Set the body background overlay color depending on the number COVID related deaths today
export default function gradColor(states, name) {
  let color = 'var(--green)';

  console.log(name);
  let theState = states.find((state) => state.state === name);
  let data = { ...theState };
  console.log(data.todayDeaths);
  if (data.todayDeaths >= 60) {
    color = 'var(--red-transparent)';
  } else if (data.todayDeaths >= 30 && data.todayDeaths < 60) {
    color = 'var(--yellow-transparent)';
  } else if (data.todayDeaths < 30) {
    color = 'var(--green-transparent)';
  }
  console.log(color);
  document.querySelector(':root').style.setProperty('--grad', `${color}`);
}
