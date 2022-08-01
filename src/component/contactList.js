import data from "../data/db";
import React from "react";

class NewRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.firstName}</td>
        <td>{this.props.lastName}</td>
        <td>{this.props.phone}</td>
        <td>
          <img alt="contact" src={this.props.image} />
        </td>
      </tr>
    );
  }
}

class ContactList extends React.Component {
  state = { data };

  render() {
    return (
      <table>
        {this.state.data.map((contact) => (
          <NewRow
            firstName={contact.first_name}
            lastName={contact.last_name}
            phone={contact.phone}
            image={contact.image}
          />
        ))}
      </table>
    );
  }
}

export default ContactList;
