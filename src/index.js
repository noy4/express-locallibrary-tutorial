var React = require('react');
var ReactDOM = require('react-dom');

class EmployeeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };

    this.loadAjax = this.loadAjax.bind(this);
  }

  loadAjax() {
    return fetch(this.props.url)
      .then((response) => response.json())
      .then((responseJson) =>
        this.setState({
          employees: responseJson.employees,
        })
      )
      .catch((error) => {
        console.error(error);
      });
  }

  UNSAFE_componentWillMount() {
    this.loadAjax();
  }

  render() {
    const employee_list = this.state.employees.map((e) => <li key={e._id}>{e.title}</li>);
    return(
      <ul>
        {employee_list}
      </ul>
    );
  }
}

// ========================================

ReactDOM.render(
  <EmployeeList url="http://localhost:3001/_api/employees" />,
  document.getElementById('root')
);