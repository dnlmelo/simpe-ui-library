import { Meta, StoryObj } from '@storybook/react';
import {Switch} from './Switch';
import { useState } from 'react';

const meta: Meta<typeof Switch> = {
  component: Switch,
};


type Story = StoryObj<typeof Switch>;

export default meta;
export const Default: Story = {
  args: { 
    checked: false,
    onChange: ()=>null
  },
};

export const Exemple:Story = {
  render: ()=> <Component/>
}

function Component(){
  const [on, setOn] = useState(false)
  return <>
    <Switch checked={on} onChange={(checked)=>setOn(checked)}>Modo Avião</Switch>
    {on && <p>Todas suas notificação estão desativadas</p>}
  </>
}