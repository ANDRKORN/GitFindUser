import { ReactComponent as CompanyIcon } from '../../assets/icon-company.svg';
import { ReactComponent as LocationIcon } from '../../assets/icon-location.svg';
import { ReactComponent as TwitterIcon} from '../../assets/icon-twitter.svg';
import { ReactComponent as BlogIcon} from '../../assets/icon-website.svg';

import { InfoItem, InfoItemProps } from '../InfoItem';

import styles from './UserInfo.module.scss';
import { UserT } from "../../types/user";

interface UserInfoProps extends Pick<
    UserT,
    'blog' | 'company' | 'location' | 'twitter_username'
> {}


export const UserInfo = ({ blog, company, location, twitter_username}: UserInfoProps) => {
  const items: InfoItemProps[] = [
    {
      icon: <LocationIcon />,
      text: location,
    },
    {
      icon: <BlogIcon />,
      text: blog,
      isLink: true,
    },
    {
      icon: <TwitterIcon />,
      text: twitter_username,
    },
    {
      icon: <CompanyIcon />,
      text: company,
    },
  ]
  
  return (
    <div className={styles.userInfo}>
      {items.map((item, index) => (
        <InfoItem {...item} key={index} />
      ))}
    </div>
  );
}
