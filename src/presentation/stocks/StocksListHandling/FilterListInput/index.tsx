import React, { FC } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { appColors } from '../../../../theme/colors';

interface Props {
  search: string;
  handleFilter: (value: string) => void;
}

const FilterListInput: FC<Props> = ({ search, handleFilter }) => {
  return (
    <TextInput
      placeholder={'Filtrar...'}
      placeholderTextColor={appColors.tertiary}
      cursorColor={appColors.tertiary}
      style={styles.input}
      onChangeText={handleFilter}
      value={search}
    />
  );
};

const styles = StyleSheet.create({
  input: { backgroundColor: appColors.secondary, borderRadius: 20, color: appColors.tertiary, paddingHorizontal: 14, paddingVertical: 10, width: 150 },
});

export default FilterListInput;
