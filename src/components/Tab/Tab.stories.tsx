import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Tab from './Tab';
import { useState } from 'react';
import CardSection from '../CardSection/CardSection';

const meta: Meta<typeof Tab>= {
  component: Tab,
};

type Story = StoryObj<typeof Tab>;

export default meta;
function Component(props:any){
  const [active, setActive] = useState('tab1')

  return <>
  <div>
    <Tab icon='link' iconPos='left' active={active === 'tab1'} label={'Tab1'} onActive={()=>setActive('tab1')}></Tab>
    <Tab icon='user' iconPos='left' active={active === 'tab2'} label={'Tab2'} onActive={()=>setActive('tab2')}></Tab>
    <Tab icon='heart' iconPos='left' active={active === 'tab3'} label={'Tab3'} onActive={()=>setActive('tab3')}></Tab>
  </div>
  <div>
    {active === 'tab1' && <CardSection> Content tab 1 </CardSection>}
    {active === 'tab2' && <CardSection> Content tab 2 </CardSection>}
    {active === 'tab3' && <CardSection> Content tab 3 </CardSection>}
  </div>
  </>
}
export const Default: Story = {
  render: ()=><Component/>,
};
