import ContentLoader from 'react-content-loader'
import styles from './Skeletons.module.scss'

const LoginFormSkeletonMobile = () => (
    <div className={styles.skeleton__wrapper}>
        <ContentLoader
            speed={3}
            width={338}
            height={624}
            viewBox="0 0 338 624"
            backgroundColor="#333b7a"
            foregroundColor="#0f123b"
        >
            <rect x="39" y="68" rx="10" ry="10" width="77" height="78" />
            <rect x="131" y="68" rx="10" ry="10" width="77" height="78" />
            <rect x="223" y="68" rx="10" ry="10" width="77" height="78" />
            <rect x="20" y="233" rx="23" ry="23" width="298" height="52" />
            <rect x="28" y="418" rx="5" ry="5" width="141" height="23" />
            <rect x="60" y="559" rx="5" ry="5" width="223" height="16" />
            <rect x="161" y="175" rx="5" ry="5" width="18" height="13" />
            <rect x="114" y="24" rx="5" ry="5" width="110" height="23" />
            <rect x="23" y="312" rx="5" ry="5" width="71" height="15" />
            <rect x="23" y="211" rx="5" ry="5" width="71" height="15" />
            <rect x="20" y="333" rx="23" ry="23" width="298" height="52" />
            <rect x="26" y="484" rx="10" ry="10" width="288" height="50" />
            <rect x="93" y="588" rx="5" ry="5" width="153" height="16" />
        </ContentLoader>
    </div>
)

export default LoginFormSkeletonMobile
