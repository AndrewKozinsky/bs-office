import React, { useContext, useEffect, useState } from 'react'
import { authFeatures } from '../../features/authFeatures.ts'
import { Context } from '../../main'
import { observer } from 'mobx-react-lite'
import { IoEyeSharp } from 'react-icons/io5'
import { FaEyeSlash } from 'react-icons/fa6'
import './login.css'

function LoginForm() {
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
	const [role, setRole] = useState('')
	const [error, setError] = useState('')
	const [isFormValid, setIsFormValid] = useState(false)
	const [isPasswordVisible, setIsPasswordVisible] = useState(false) // Новое состояние

	const isFormValidCheck = () => {
		return login.trim() !== '' && password.trim() !== ''
	}

	const onInputChange = (e) => {
		const { name, value } = e.target
		if (name === 'login') setLogin(value)
		if (name === 'password') setPassword(value)

		setIsFormValid(isFormValidCheck())
	}

	const handleLogin = async (e) => {
		e.preventDefault()

		await authFeatures.login({ login, password, role })
	}

	const togglePasswordVisibility = () => {
		setIsPasswordVisible((prevState) => !prevState) // Функция для переключения видимости пароля
	}

	return (
		<div className='container-login'>
			<h1>Авторизация</h1>
			<form onSubmit={handleLogin} className='container-login-form'>
				<input
					onInput={onInputChange}
					value={login}
					name='login'
					type='text'
					placeholder='Логин'
					className={!isFormValid && login.trim() === '' ? 'invalid' : ''}
				/>
				<div className='password-container'>
					<input
						onInput={onInputChange}
						value={password}
						name='password'
						type={isPasswordVisible ? 'text' : 'password'}
						placeholder='Пароль'
						className={!isFormValid && password.trim() === '' ? 'invalid' : ''}
					/>
					{isPasswordVisible ? (
						<FaEyeSlash onClick={togglePasswordVisibility} />
					) : (
						<IoEyeSharp onClick={togglePasswordVisibility} />
					)}
				</div>
				<button type='submit' disabled={!isFormValid} className={!isFormValid ? 'button-error' : ''}>
					Войти
				</button>
				{error && <div className='error'>{error}</div>}
			</form>
		</div>
	)
}

export default observer(LoginForm)
