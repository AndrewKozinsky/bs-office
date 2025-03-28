import React, { useRef } from 'react'
import { Button } from 'antd'
import { CloseOutlined, DownloadOutlined } from '@ant-design/icons'
import AudioPlayer from '../../../common/components/AudioPlayer/AudioPlayer.tsx'
import {
	useDownloadAudioAndSetToAudioElem,
	useGetClosePlayer,
	useIsPlayerVisible,
	useGetDownloadAudio,
} from './fn/playerLogic.ts'
import './CallRecordPleer.scss'

function CallRecordPlayer() {
	const audioPlayerRef = useRef<HTMLAudioElement | null>(null)

	const isPlayerVisible = useIsPlayerVisible()
	const closePlayer = useGetClosePlayer()
	const downloadAudio = useGetDownloadAudio()

	useDownloadAudioAndSetToAudioElem(audioPlayerRef, isPlayerVisible)

	if (!isPlayerVisible) return null

	return (
		<div className='call-record-player'>
			<div className='call-record-player__content'>
				<AudioPlayer className='call-record-player__audio' ref={audioPlayerRef} />
				<Button icon={<DownloadOutlined />} onClick={downloadAudio}>
					Скачать
				</Button>
				<Button icon={<CloseOutlined />} shape='circle' onClick={closePlayer}></Button>
			</div>
		</div>
	)
}

export default CallRecordPlayer
