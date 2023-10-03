// Import stylesheets
import './style.css';

class MainForm {
  constructor(arr) {
    this.arr = arr;
  }
  
  createLabel(text, forName) {
    const label = document.createElement('label');

    label.setAttribute('for', forName);
    label.innerText = text;

    return label;
  }

  createInput(name) {
    const input = document.createElement('input');
    
    input.setAttribute('name', name);

    return input;
  }

  createFormGroup(labelText, inputName) {
    const div = document.createElement('div');

    div.append(this.createLabel(labelText, inputName));
    div.append(this.createInput(inputName));

    return div;
  }

  createSubmitButton() {
    const button = document.createElement('button');

    button.setAttribute('type', 'submit');
    button.innerText = 'Submit';

    return button;
  }

  submitForm(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    this.renderOuput(Object.fromEntries(formData));
  }
  
  createForm() {
    const form = document.createElement('form');

    this.arr.forEach(element => {
      form.append(this.createFormGroup(element.labelText, element.forName));
    })


    form.append(this.createSubmitButton());

    form.addEventListener('submit', event => this.submitForm(event));

    return form;
  }

  renderOuput(fromEntries) {
    const root = document.querySelector('#root');
    const pre = document.createElement('pre');

    pre.innerText = JSON.stringify(fromEntries);
    root.appendChild(pre);
  }

  render() {
    const root = document.querySelector('#root');
    
    root.appendChild(this.createForm());
  }


}

const mainForm = new MainForm([
  {
    labelText: 'Enter your laptop model',
    forName: 'model'
  },
  {
    labelText: 'Enter your CPU name',
    forName: 'cpu'
  },
  {
    labelText: 'Enter your graphics card model',
    forName: 'graphicsCard'
  },
  {
    labelText: 'Enter your amount of RAM',
    forName: 'ram'
  },
  {
    labelText: 'Enter your SSD model',
    forName: 'ssd'
  }
]);
mainForm.render();