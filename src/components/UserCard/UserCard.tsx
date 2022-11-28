import styles from './UserCard.module.scss';
import { UserStat } from "../UserStat";
import { UserT } from "../../types/user";
import {UserTitle} from "../UserTitle";
import {UserInfo} from "../UserInfo";

interface UserCardProps extends UserT {

}

export const UserCard = (props: UserCardProps) => (
  <div className={styles.userCard}>
    <img
        src={props.avatar_url}
        alt={props.login}
        className={styles.avatar}
    />
    <UserTitle
        name={props.name}
        login={props.login}
        updated_at={props.updated_at}
        created_at={props.created_at}
        html_url={props.html_url}
    />
      <p
        className={`${styles.bio}${props.bio ? '' : ` ${styles.empty}`}`}
      >
          {
              props.bio || 'This profile has no bio'
          }
      </p>
    <UserStat
        followers={props.followers}
        following={props.following}
        public_repos={props.public_repos}
    />
    <UserInfo
        company={props.company}
        location={props.location}
        blog={props.blog}
        twitter_username={props.twitter_username}
    />
  </div>
);
