import React from 'react';
import './accordion.styles.css';
import { Button } from '@mantine/core';

export const AccordionItem = ({
  label,
  isCollapsed,
  handleClick,
  children,
}) => {
  return (
    <>
      <Button
        fullWidth
        variant='gradient'
        gradient={{ from: 'indigo', to: 'cyan' }}
        className='accordion-button'
        onClick={handleClick}
      >
        {label}
      </Button>
      <div
        className={`accordion-item ${isCollapsed ? 'collapsed' : 'expanded'}`}
        aria-expanded={isCollapsed}
      >
        {children}
      </div>
    </>
  );
};

export const Accordion = ({ defaultIndex, onItemClick, children }) => {
  const [bindIndex, setBindIndex] = React.useState(defaultIndex);

  const changeItem = (itemIndex) => {
    if (typeof onItemClick === 'function') onItemClick(itemIndex);
    if (itemIndex !== bindIndex) setBindIndex(itemIndex);
  };
  const items = children.filter((item) => item.type.name === 'AccordionItem');

  return (
    <>
      {items.map(({ props }) => (
        <AccordionItem
          isCollapsed={bindIndex !== props.index}
          label={props.label}
          handleClick={() => changeItem(props.index)}
          children={props.children}
        />
      ))}
    </>
  );
};
