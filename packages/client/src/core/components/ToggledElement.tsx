import React, { useState } from 'react';

export default function ToggledElement(
  element: keyof JSX.IntrinsicElements,
  initialAttr: Record<string, unknown>,
  newAttr: Record<string, unknown>
) {
  const [flag, setFlag] = useState(false);
  const [attr, setAttributes] = useState(initialAttr)

  function toggle() {
    setFlag(p => !p);

    if (flag) {
      setAttributes(p => ({
        ...p,
        ...newAttr
      }));
    } else {
      setAttributes(initialAttr);
    }
  }

  return {
    flag,
    toggle,
    Component: () => React.createElement(element, attr)
  };
}
