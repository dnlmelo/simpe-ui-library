import { Meta, StoryObj } from '@storybook/react';
import './Table.scss';
import { Icon } from '../Icons/Icon';

const meta: Meta<typeof Table>= {
  component: Table,
};

type Story = StoryObj<typeof Table>;

export default meta;

export const Default: Story = {
  render: ()=><Table></Table>
};

function Table(){
  return <table className="table table-stripped">
  <thead className="tableHeader">
    <th>col 1 <Icon name="arrow-up" size={"md"}></Icon></th>
    <th>col 2 <Icon name="arrow-up" size={"md"}></Icon></th>
    <th>col 3 <Icon name="arrow-up" size={"md"}></Icon></th>
  </thead>
  <tbody>
    <tr>
      <td>cell 1</td>
      <td>cell 2</td>
      <td>cell 3</td>
    </tr>
    <tr>
      <td>cell 1</td>
      <td>cell 2</td>
      <td>cell 3</td>
    </tr>
  </tbody>
</table>
}