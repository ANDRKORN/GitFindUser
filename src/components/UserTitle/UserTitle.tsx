import styles from './UserTitle.module.scss';
import {UserT} from "../../types/user";

interface UserTitleProps extends Pick<UserT, 'login' | 'name' | 'created_at' | 'updated_at'| 'html_url'>{ }
const localDate = new Intl.DateTimeFormat('en-GB', {
    day: "numeric",
    month: 'short',
    year: "numeric"
})
export const UserTitle = ({ name, login, updated_at, created_at, html_url }: UserTitleProps) => {
    const createdDate = localDate.format(new Date(created_at))
    const updateDate = localDate.format(new Date(updated_at))
    return (
    <div className={styles.userTitle}>
        <h2>{name}</h2>
        <h3><a href={html_url}>{login}</a></h3>
        <div>
            <span>Joined {createdDate}</span>
            <span>Updated {updateDate}</span>
        </div>
    </div>
    )
};
