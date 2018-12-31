import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import {Tab} from './components/header/tab.js';
import {Tabs} from './components/header/tabs.js';
import {Header} from './components/header/header.js';
import {Logo} from './components/header/logo.js';
import { MenuRight } from './components/header/menu-right.js';
import { SideBar } from './components/header/side-bar.js';
import { AnnoTabs } from './components/header/anno-tabs.js';
import { AnnoTab } from './components/header/anno-tab.js';
import { DragDrop } from './components/header/dragDrop.js';
import { AllScreen } from './components/header/all-screen.js';
import { DragSpace } from './components/header/drag-space.js';
import { FormFieldArea } from './components/header/form-field-area.js';
import { FormFieldDrop } from './components/header/form-field-dropdown.js';
import { SelectExample } from './components/header/FormSelect.js';
import { FormArea } from './components/header/FormArea.js';
import { AllScreen2 } from './components/header/all-screen-2.js';
import { DropDownMenu } from './components/header/dropDownMenu.js';


storiesOf('Tab', module)
  .add('one tab', () => <Tab />)

  storiesOf('Tabs', module)
  .add('all tabs', () => <Tabs />)

  storiesOf('Header', module)
  .add('All header', () => <Header />)

  storiesOf('Logo', module)
  .add('logo png', () => <Logo />)

  storiesOf('MenuRight', module)
  .add('right menu', () => <MenuRight />)
  .add('drop down menu', () => <DropDownMenu />)

  storiesOf('SideBar', module)
  .add('Side bar', () => <SideBar />)

  storiesOf('AnnoTabs', module)
  .add('All side tabs', () => <AnnoTabs />) 

  storiesOf('AnnoTab', module)
  .add('One side tab', () => <AnnoTab />) 

  storiesOf('DragDrop', module)
  .add('drag and drop section', () => <DragDrop />) 

  storiesOf('AllScreen', module)
  .add('first screen section', () => <AllScreen />)
  .add('secound screen section', () => <AllScreen2 />) 
 

  storiesOf('DragSpace', module)
  .add('DragSpace', () => <DragSpace />) 

  storiesOf('FormField', module)
  .add('Form field area', () => <FormFieldArea />) 
  .add('Form field drop down empty', () => <FormFieldDrop />) 
  .add('Form field drop down options', () => <FormFieldDrop formInstructions={"something"} options={[1,2,3,4]} />) 
  .add('Select Example', () => <SelectExample />) 
  .add('Form area example', () => <FormArea />) 


