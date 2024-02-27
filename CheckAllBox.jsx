import React, { useState } from 'react';
import styled from 'styled-components';

const CheckboxList = () => {
const [checkboxes, setCheckboxes] = useState([
  { id: 1, label: 'Dogs', checked: false },
  { id: 2, label: 'Cats', checked: false },
  { id: 3, label: 'Cows', checked: false },
  { id: 4, label: 'Deers', checked: false },
]);

const handleCheckboxChange = (id) => {
  setCheckboxes(
    checkboxes.map((checkbox) =>
      checkbox.id === id
        ? { ...checkbox, checked: !checkbox.checked }
        : checkbox
    )
  );
};

const handleSelectAll = () => {
  setCheckboxes(checkboxes.map((checkbox) => ({ ...checkbox, checked: true })));
};

return (
  <Container>
    <CheckboxContainer data-testid="checkbox-container">
      {checkboxes.map((checkbox, index) => (
        <CheckboxLabel key={checkbox.id}>
          <input
            data-testid={`checkbox-${index + 1}`}
            type="checkbox"
            checked={checkbox.checked}
            onChange={() => handleCheckboxChange(checkbox.id)}
          />
          {checkbox.label}
        </CheckboxLabel>
      ))}
    </CheckboxContainer>
    <SelectAllButton data-testid="button" onClick={handleSelectAll}>Select All</SelectAllButton>
  </Container>
);
};

export default CheckboxList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin: 24px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const SelectAllButton = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  border-radius: 4px;
  background-color: #333;
  color: #fff;
  cursor: pointer;
  margin-top: 24px;

  &:hover {
    opacity: 0.8;
  }
`;
