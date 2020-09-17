import React from 'react';
import { Table } from 'semantic-ui-react';

const ConfirmOrder = () => (
  <Table definition>
    <Table.Body>
      <Table.Row>
        <Table.Cell>NAME</Table.Cell>
        <Table.Cell>Heng</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>EMAIL</Table.Cell>
        <Table.Cell>user@hm.com</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>PHONE</Table.Cell>
        <Table.Cell>(123)-456-7890</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>SHIPPING ADDRESS</Table.Cell>
        <Table.Cell>1234 Vermont Dr</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

export default ConfirmOrder;