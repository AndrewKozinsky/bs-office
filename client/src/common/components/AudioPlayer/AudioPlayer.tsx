import React from 'react'
import cn from 'classnames'
import './AudioPlayer.scss'

interface AudioPlayerProps
	extends React.DetailedHTMLProps<React.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement> {
	ref?: React.MutableRefObject<HTMLAudioElement>
}

function AudioPlayer(props: AudioPlayerProps) {
	const { className, ref, ...lastProps } = props

	return <audio className={cn('audio-player', className)} {...lastProps} preload='auto' controls ref={ref} />
}

export default AudioPlayer
