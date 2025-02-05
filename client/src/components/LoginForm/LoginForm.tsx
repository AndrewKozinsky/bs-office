import { Button, Form, FormProps, Input } from 'antd'
import React from 'react'
import { FieldType, submitForm } from './fn/submit.ts'
import './login.css'

function LoginForm() {
	const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
		console.log('Failed:', errorInfo)
	}

	return (
		<Form
			name='basic'
			labelCol={{ span: 8 }}
			wrapperCol={{ span: 16 }}
			style={{ maxWidth: 600 }}
			initialValues={{ remember: true }}
			onFinish={submitForm}
			onFinishFailed={onFinishFailed}
			autoComplete='off'
		>
			<Form.Item<FieldType>
				label='Логин'
				name='login'
				rules={[{ required: true, message: 'Please input your login!' }]}
			>
				<Input />
			</Form.Item>

			<Form.Item<FieldType>
				label='Пароль'
				name='password'
				rules={[{ required: true, message: 'Please input your password!' }]}
			>
				<Input.Password />
			</Form.Item>

			<Form.Item label={null}>
				<Button type='primary' htmlType='submit'>
					Отправить
				</Button>
			</Form.Item>
		</Form>
	)
}

export default LoginForm
