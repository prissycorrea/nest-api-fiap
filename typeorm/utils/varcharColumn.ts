import { TableColumnOptions } from 'typeorm';
export const varCharColumn = (
  name = 'name',
  length = '255', //quantos caracteres esse padrão vai aceitar
  isNullable = false,
  isUnique = false, //chave unica, por padrão é false
): TableColumnOptions => ({
  name,
  type: 'varchar',
  length,
  isNullable,
  isUnique,
});
