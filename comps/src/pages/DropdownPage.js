import Dropdown from "../components/Dropdown";
import { useState } from "react";

function DropdownPage() {
    const [selected,setSelected] =useState(null);

    const handleSelect = (option) => {
      setSelected(option);
    }
  
    const options = [
      {label: 'red', value:'red'},
      {label: 'blue', value:'blue'},
      {label: 'green', value:'green'}
    ];
  
  
    return <div>
      <Dropdown onChange={handleSelect} value={selected} options={options}/>
    </div>
}

export default DropdownPage;