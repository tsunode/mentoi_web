import { useField } from '@unform/core';
import { useEffect, useRef, useState } from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { StyledComponent } from 'styled-components';

import { Label, Error } from './styles';

interface RadioProps {
  label: string;
  customComponent?: StyledComponent<'div', any, {}, never>;
  name: string;
  items: {
    id: string;
    descrption: string;
    icon?: React.ComponentType<IconBaseProps>;
  }[];
}

const Radio = ({
  label,
  customComponent: Container,
  name,
  items,
}: RadioProps) => {
  const { fieldName, defaultValue, error, registerField } = useField(name);
  const radioRefs = useRef<HTMLInputElement[]>([]);
  const [selectedRadio, setSelecteRadio] = useState('');

  useEffect(() => {
    setSelecteRadio(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: radioRefs.current,
      getValue(refs: HTMLInputElement[]) {
        const checked = refs.find(ref => ref.checked);

        return checked ? checked.id : null;
      },
      setValue(refs: HTMLInputElement[], value: string) {
        const item = refs.find(ref => ref.value === value);

        if (item) {
          item.checked = true;
        }
      },
    });
  }, [fieldName, registerField]);

  function handleChangeRadio(id: string) {
    setSelecteRadio(id);
  }

  return (
    <>
      <Label>
        {label}
        {error && (
          <Error title={error}>
            <FiAlertCircle color="#c53030" size={20} />
          </Error>
        )}
      </Label>
      <Container>
        {items.map(({ id, descrption, icon: Icon }, index) => (
          <div key={id}>
            <input
              ref={elRef => (radioRefs.current[index] = elRef)}
              type="radio"
              id={id}
              name={fieldName}
              value={id}
              checked={selectedRadio === id}
              onChange={() => handleChangeRadio(id)}
            />
            <label htmlFor={id}>
              {Icon && <Icon />}
              {descrption}
            </label>
          </div>
        ))}
      </Container>
    </>
  );
};

export default Radio;
