import ContentLoader from 'react-content-loader'

const RegisterFormSkeleton = () => (
    <div style={{ border: '1px solid white', borderRadius: '30px' }}>
        <ContentLoader
            speed={3}
            width={433}
            height={868}
            viewBox="0 0 433 868"
            backgroundColor="#2f366a"
            foregroundColor="#0f123b"
        >
            <rect x="86" y="93" rx="10" ry="10" width="77" height="78" />
            <rect x="45" y="280" rx="23" ry="23" width="343" height="52" />
            <rect x="46" y="380" rx="23" ry="23" width="342" height="52" />
            <rect x="46" y="581" rx="23" ry="23" width="342" height="52" />
            <rect x="46" y="481" rx="23" ry="23" width="342" height="52" />
            <rect x="178" y="93" rx="10" ry="10" width="77" height="78" />
            <rect x="270" y="93" rx="10" ry="10" width="77" height="78" />
            <rect x="52" y="731" rx="13" ry="13" width="328" height="50" />
            <rect x="160" y="47" rx="5" ry="5" width="110" height="22" />
            <rect x="54" y="665" rx="5" ry="5" width="139" height="23" />
            <rect x="110" y="807" rx="5" ry="5" width="215" height="17" />
            <rect x="207" y="221" rx="5" ry="5" width="20" height="17" />
            <rect x="48" y="257" rx="5" ry="5" width="72" height="14" />
            <rect x="48" y="358" rx="5" ry="5" width="72" height="14" />
            <rect x="47" y="459" rx="5" ry="5" width="72" height="14" />
            <rect x="45" y="557" rx="5" ry="5" width="72" height="14" />
        </ContentLoader>
    </div>
)

export default RegisterFormSkeleton
