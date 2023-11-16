import classnames from 'classnames';
import styles from '../style.module.css';

type Props = {
  imgSrc: string;
};

export const CompanyLogo = ({imgSrc}: Props) => {
  return (
    <div className={classnames(styles.companyDesign)}>
      <img src={imgSrc} className={classnames(styles.logo)} />
    </div>
  );
};
