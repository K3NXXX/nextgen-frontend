import ContentLoader from 'react-content-loader'

const LoginFormSkeleton = () => (
    <div style={{ border: '1px solid white', borderRadius: '30px' }}>
        <ContentLoader
            speed={3}
            width={433}
            height={697}
            viewBox="0 0 433 697"
            backgroundColor="#333b7a"
            foregroundColor="#0f123b"
        >
            <rect x="87" y="94" rx="10" ry="10" width="77" height="78" />
            <rect x="179" y="94" rx="10" ry="10" width="77" height="78" />
            <rect x="271" y="94" rx="10" ry="10" width="77" height="78" />
            <rect x="46" y="282" rx="23" ry="23" width="343" height="52" />
            <rect x="47" y="532" rx="10" ry="10" width="340" height="50" />
            <rect x="114" y="606" rx="5" ry="5" width="209" height="18" />
            <rect x="139" y="637" rx="5" ry="5" width="156" height="16" />
            <rect x="55" y="466" rx="5" ry="5" width="139" height="21" />
            <rect x="208" y="223" rx="5" ry="5" width="18" height="13" />
            <rect x="172" y="48" rx="5" ry="5" width="90" height="22" />
            <rect x="47" y="360" rx="5" ry="5" width="71" height="15" />
            <rect x="47" y="260" rx="5" ry="5" width="71" height="15" />
            <rect x="46" y="382" rx="23" ry="23" width="343" height="52" />
        </ContentLoader>
    </div>
)

export default LoginFormSkeleton
