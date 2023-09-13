import * as React from 'react';

import cx from 'clsx';

import { IActionMenuOption } from '../ActionMenu/types';

import styles from './ListItem.module.scss';

export interface IListItem {
  option: IActionMenuOption;
  index: number;
  isOptionActive?: boolean;
  onClick(): void;
}

const baseClass = 'list-item';

export const ListItem: React.FC<IListItem> = ({
  option,
  index,
  isOptionActive,
  onClick,
}) => {
  if (option.groupHeader) {
    return (
      <li
        key={option.key}
        role="none"
        className={styles[`${baseClass}__group-header`]}
      >
        {option.element}
      </li>
    );
  }

  return (
    <li key={option.key} role="none">
      <button
        id={`list-item-${index}`}
        data-testid={option.key}
        tabIndex={-1}
        key={option.key}
        disabled={option.disabled}
        onClick={() => onClick()}
        role="menuitem"
        className={cx(styles[`${baseClass}`], {
          [styles[`${baseClass}--disabled`]]: option.disabled,
          [styles[`${baseClass}--with-divider`]]: option.withDivider,
          [styles[`${baseClass}--active`]]: isOptionActive,
        })}
      >
        {option.element}
      </button>
    </li>
  );
};
