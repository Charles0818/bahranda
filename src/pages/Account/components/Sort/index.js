import React, { useState, useRef, memo } from 'react';
import { Form } from '../../../components';
import { MdKeyboardArrowDown } from 'react-icons/md'
const { RadioButton } = Form;

const useSort = (options) => {
  const [selectedValue, setSelectedValue] = useState(() => {
    const [firstOption] = options;
    return { label: firstOption, value: firstOption }
  });
  const { value } = selectedValue;
  const Sort = ({ className = '' }) => {
    const chevronRef = useRef(null);
    const dropdown = useRef(null);
    return (
      <div className={`radio-select-dropdown position-relative bg-white ${className}`}>
        <div onClick={() => dropdown.current.classList.toggle('open')}
          className="position-relative d-flex align-items-center justify-content-s-between slim-border padding-vertical-xsm padding-horizontal-sm border-r-5">
          <span className={`font-md margin-right-sm color1 font-weight-500 `}>
            Sort: {selectedValue.label}
          </span>
          <div className="chevron-icon" ref={chevronRef}>
            <MdKeyboardArrowDown className={"font-lg color-gray"}/>
          </div>
        </div>
        <div ref={dropdown} className="padding-md input-dropdown bg-white">
          {options.map(option => {
            const { label } = option;
            return <RadioButton key={label} label={label} onChange={setSelectedValue} checked={selectedValue && selectedValue.label === label} />
          })}
        </div>
      </div>
    )
  }
  return { Sort, value }
}

export default useSort;