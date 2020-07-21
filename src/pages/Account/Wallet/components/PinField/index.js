import React, { useRef } from 'react';

const PinFields = ({ pinArray, setPinArray }) => {
  const firstTextInputRef = useRef(null);
  const secondTextInputRef = useRef(null);
  const thirdTextInputRef = useRef(null);
  const fourthTextInputRef = useRef(null);
  const refCallback = textInputRef => node => {
    textInputRef.current = node;
  };

  const onOtpChange = index => {
    return e => {
      const { value } = e.target
      const pinArrayCopy = pinArray.concat();
      pinArrayCopy[index] = value;
      setPinArray(pinArrayCopy);

      // auto focus to next InputText if value is not blank
      if (value !== '') {
        if (index === 0) {
          secondTextInputRef.current.focus();
        } else if (index === 1) {
          thirdTextInputRef.current.focus();
        } else if (index === 2) {
          fourthTextInputRef.current.focus();
        }
      }
    };
  };
  const onOtpKeyPress = index => {
    return ({ key: value }) => {
      // auto focus to previous InputText if value is blank and existing value is also blank
      if (value === 'Backspace' && pinArray[index] === '') {
        if (index === 1) {
          firstTextInputRef.current.focus();
        } else if (index === 2) {
          secondTextInputRef.current.focus();
        } else if (index === 3) {
          thirdTextInputRef.current.focus();
        }
      }
    };
};
  return (
    <div className="d-flex align-items-center">
      {[
        firstTextInputRef,
        secondTextInputRef,
        thirdTextInputRef,
        fourthTextInputRef,
      ].map((textInputRef, index) => (
        <input
          className=" text-center"
          value={pinArray[index]}
          onKeyPress={onOtpKeyPress(index)}
          onChange={onOtpChange(index)}
          keyboardType={'numeric'}
          maxLength={1}
          autoFocus={index === 0 ? true : undefined}
          ref={refCallback(textInputRef)}
          key={index}
          placeholder={`${index + 1}`}
          // style={[otpStyles.field, styles.bg_gray, styles.text_center, styles.border_r_5, styles.marginRight_sm]}
        />
      ))}
    </div>
  )
}

export default PinFields