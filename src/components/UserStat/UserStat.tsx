import styles from './UserStat.module.scss';
import { UserT } from "../../types/user";

export interface UserStatProps extends Pick<UserT, 'followers' | 'following' | 'public_repos'> {

}

export const UserStat = ({ followers, following, public_repos }: UserStatProps) => (
  <div className={styles.userStat}>
    <div className={styles.info}>
        <div className={styles.infoTitle}>Repos</div>
        <div className={styles.infoTitle}>{public_repos}</div>
    </div>
    <div className={styles.info}>
        <div className={styles.infoTitle}>Following</div>
        <div className={styles.infoTitle}>{following}</div>
    </div>
    <div className={styles.info}>
        <div className={styles.infoTitle}>Followers</div>
        <div className={styles.infoTitle}>{followers}</div>
    </div>
  </div>
);
