import { FC } from "react"
import styles from "./TemplateName.module.scss"
import { TemplateNameProps } from './interface';

const TemplateName: FC<TemplateNameProps> = () => (
  <div className={styles["template-name"]} data-testid="TemplateName">
    Test Component
  </div>
);

export default TemplateName;
