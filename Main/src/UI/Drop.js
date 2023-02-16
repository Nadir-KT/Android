import React, { useState } from 'react';

import { View } from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';

export default function Drop() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Kerala', value: '1'},
    {label: 'Tamilnadu', value: '2'},
    {label: 'Karnataka', value: '3'}
  ]);

  return (
      <DropDownPicker style= {{width:311,height:51,marginTop:16,backgroundColor:'#062E40',borderColor:'#007345',borderWidth:1,borderRadius:8,fontSize:16}}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}

        //theme="DARK"
        placeholder= 'Select state'
        placeholderTextColor={'#446270'}
        //multiple={true}
        //mode="BADGE"
        badgeColors={'#062E40'}
        badgeDotColors={'#446270'}
      />
  );
}