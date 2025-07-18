'use client'

import Image from 'next/image'
import React, { useCallback } from 'react'
import Button from '../ui/button'
import { FcGoogle } from 'react-icons/fc'
import { AiFillGithub } from 'react-icons/ai'
import useRegisterModal from '@/hooks/useRegisterModal'
import RegisterModal from '../modals/register-modal'
import useLoginModal from '@/hooks/useLoginModal'
import LoginModal from '../modals/login-modal'
import { signIn } from 'next-auth/react'

export default function Auth() {
	const registerModal = useRegisterModal()
	const loginModal = useLoginModal()

	const onOpenRegisterModal = useCallback(() => {
		registerModal.onOpen()
	}, [registerModal])

	const onOpenLoginModal = useCallback(() => {
		loginModal.onOpen()
	}, [loginModal])

	return (
		<>
			<RegisterModal />
			<LoginModal />
			<div className='grid items-center h-screen grid-cols-1 gap-10 md:grid-cols-2'>
				<Image src={'/images/x.svg'} alt='X' width={450} height={450} className='hidden justify-self-center md:block' />

				<div className='flex flex-col justify-center md:justify-between gap-6 h-full md:h-[70vh]'>
					<div className='block md:hidden'>
						<Image src={'/images/x.svg'} alt='X' width={50} height={50} />
					</div>
					<h1 className='text-6xl font-bold'>Happening now guyzz</h1>
					<div className='w-full md:w-[60%]'>
						<h2 className='mb-4 text-3xl font-bold'>Join us</h2>
						<div className='flex flex-col space-y-2'>
							<Button
								onClick={() => signIn('google')}
								label={
									<div className='flex items-center justify-center gap-2'>
										<FcGoogle />
										Sign up with Google
									</div>
								}
								fullWidth
								secondary
							/>
							<Button
								onClick={() => signIn('github')}
								label={
									<div className='flex items-center justify-center gap-2'>
										<AiFillGithub />
										Sign up with Github
									</div>
								}
								fullWidth
								secondary
							/>
							<div className='flex items-center justify-center'>
								<div className='w-1/2 h-px bg-gray-700' />
								<p className='mx-4'>or</p>
								<div className='w-1/2 h-px bg-gray-700' />
							</div>
							<Button label={'Create account'} fullWidth onClick={onOpenRegisterModal} />
							<div className='text-[10px] text-gray-400'>
								By signing up, you agree to the <span className='text-sky-500'>Terms of Service</span> and
								<span className='text-sky-500'> Privacy Policy</span>, including
								<span className='text-sky-500'> Cookie Use</span>.
							</div>
						</div>
					</div>
					<div className='w-full md:w-[60%]'>
						<h3 className='mb-4 text-xl font-medium'>Already have an account?</h3>
						<Button label={'Sign in'} fullWidth outline onClick={onOpenLoginModal} />
					</div>
				</div>
			</div>
		</>
	)
}
