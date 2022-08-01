import data from "../data/db";
import React from "react";
import SearchField from "./searchField";

class NewRow extends React.Component {
  render() {
    return (
      <tr className="newRow">
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
  state = {
    contacts: data,
    active: data,
  };

  filterList = (text) => {
    const filteredList = this.state.contacts.filter(
      (contact) =>
        text.toLowerCase() === "" ||
        contact.first_name.toLowerCase().includes(text) ||
        contact.first_name.includes(text) ||
        contact.last_name.toLowerCase().includes(text) ||
        contact.last_name.includes(text) ||
        contact.phone.includes(text)
    );
    console.log(text, filteredList);
    this.setState({
      active: filteredList,
    });
  };

  render() {
    return (
      <div className="container">
        <SearchField filter={this.filterList} />
        <table className="contactList">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone Number</th>
              <th>Contact Picture</th>
            </tr>
          </thead>
          <tbody>
            {this.state.active.map((contact) => (
              <NewRow
                key={contact.first_name + contact.last_name}
                firstName={contact.first_name}
                lastName={contact.last_name}
                phone={contact.phone}
                image={contact.image}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ContactList;
