import { Button } from 'antd'
import React from 'react'
import { useGetOnExitButtonClick } from './fn/onExitButtonClick.ts'

function ExitButton() {
	const onExitButtonClick = useGetOnExitButtonClick()

	return (
		<Button onClick={onExitButtonClick} size='small'>
			Выход
		</Button>
	)
}

export default ExitButton
