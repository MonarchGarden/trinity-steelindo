import {PropsWithChildren} from 'react';
import classnames from 'classnames';
import styles from './style.module.css';

type Props = PropsWithChildren;

export const CompanyDesign = ({children}: Props) => {
  return <div className={classnames(styles.companyDesign)}>{children}</div>;
};
