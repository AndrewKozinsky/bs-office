import React, { useEffect, useRef } from 'react'
import { Button, Space } from 'antd'
import { CloseOutlined, DownloadOutlined } from '@ant-design/icons'
import AudioPlayer from '../../../common/components/AudioPlayer/AudioPlayer.tsx'
import { useCallsStore } from '../callsStore/callsStore.ts'
import { useTest, useGetClosePlayer, useIsPlayerVisible, useGetDownloadAudio } from './fn/playerLogic.ts'
import './CallRecordPleer.scss'

function CallRecordPlayer() {
	const recordFileName = useCallsStore((s) => s.currentRecordFileName)

	const audioPlayerRef = useRef<HTMLAudioElement | null>(null)
	const isPlayerVisible = useIsPlayerVisible()
	const closePlayer = useGetClosePlayer()
	const downloadAudio = useGetDownloadAudio()

	useEffect(
		function () {
			console.log(audioPlayerRef)
		},
		[audioPlayerRef],
	)

	useTest()

	if (!isPlayerVisible) return null

	return (
		<div className='call-record-player'>
			<div className='call-record-player__content'>
				<AudioPlayer
					src={`audio/${recordFileName}`}
					className='call-record-player__audio'
					ref={audioPlayerRef}
				/>
				<Button icon={<DownloadOutlined />} onClick={downloadAudio}>
					Скачать
				</Button>
				<Button icon={<CloseOutlined />} shape='circle' onClick={closePlayer}></Button>
			</div>
		</div>
	)
}

export default CallRecordPlayer
