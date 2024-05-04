import { SignOutButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'

export default async function Profile() {
	const user = await currentUser()
    if (!user) return <div style={{color:"white"}}>Not signed in</div>;
    console.log(user.firstName)
	return <div>{user.firstName}
		<SignOutButton/>
	</div>
}
