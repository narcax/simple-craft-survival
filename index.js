// Import stylesheets
import './style.css';

const App = {
  state: {
    food: 0,
    wood: 0,
    cly: 0,
    iron: 0,
  },
  template() {
    return `
    <table>
    <tr>
      <th>Food</th>
      <th>Wood</th>
      <th>Cly</th>
      <th>Iron</th>
    </tr>
    <tr>
      <td id="food">${this.state.food}</td>
      <td id="wood">${this.state.wood}</td>
      <td id="cly">${this.state.cly}</td>
      <td id="iron">${this.state.iron}</td>
    </tr>
  </table>
       <br />
       <button id="make-food">Collect Food</button>
        <button id="make-wood">Cut Wood</button>
        <button id="make-cly">Dig Cly</button>
        <button id="make-iron">Dig Iron</button>
      `;
  },
  initialize() {
    document.getElementById('app').innerHTML = this.template();
    document
      .getElementById('make-wood')
      .addEventListener('click', () => App.increment('wood'));
    document
      .getElementById('make-food')
      .addEventListener('click', () => App.increment('food'));
    document
      .getElementById('make-cly')
      .addEventListener('click', () => App.increment('cly'));
    document
      .getElementById('make-iron')
      .addEventListener('click', () => App.increment('iron'));
  },

  increment(material) {
    switch (material) {
      case 'wood':
        this.state.wood++;
        break;
      case 'food':
        this.state.food++;
        break;
      case 'cly':
        this.state.cly++;
        break;
      case 'iron':
        this.state.iron++;
        break;
    }

    this.updateUI();
  },
  updateUI() {
    document.getElementById('wood').textContent = this.state.wood;
    document.getElementById('food').textContent = this.state.food;
    document.getElementById('cly').textContent = this.state.cly;
    document.getElementById('iron').textContent = this.state.iron;
  },
};
App.initialize();
