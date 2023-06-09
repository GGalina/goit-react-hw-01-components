import PropTypes from 'prop-types';
import s from './Profile.module.css'

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={s.card}>
        <div className={s.description}>
            <img className={s.avatar} src={avatar} alt="User avatar" />
            <p className={s.name}>{username}</p>
            <p className={s.tag}>@{tag}</p>
            <p className={s.location}>{location}</p>
        </div>

        <ul className={s.stats}>
            <li className={s.item}>
                <span className={s.title}>Followers</span>
                <span className={s.amount}>{stats.followers}</span>
            </li>
            <li className={s.item}>
                <span className={s.title}>Views</span>
                <span className={s.amount}>{stats.views}</span>
            </li>
            <li className={s.item}>
                <span className={s.title}>Likes</span>
                <span className={s.amount}>{stats.likes}</span>
            </li>
        </ul>
    </div>
  );
};

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
  })
};

export default Profile;