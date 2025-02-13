import React from 'react'

interface IconProps extends React.SVGProps<SVGSVGElement> {}

export function InsideAnsweredIcon(props: IconProps) {
	return (
		<svg
			width='22px'
			height='22px'
			viewBox='0 0 22 22'
			version='1.1'
			xmlns='http://www.w3.org/2000/svg'
			xmlnsXlink='http://www.w3.org/1999/xlink'
			{...props}
		>
			<path
				d='M11,0 C17.0751322,0 22,4.92486775 22,11 C22,17.0751322 17.0751322,22 11,22 C4.92486775,22 0,17.0751322 0,11 C0,4.92486775 4.92486775,0 11,0 Z M10.4411765,4 L10.4411765,8.16455696 L4,8.16455696 L4,13.835443 L10.4411765,13.835443 L10.4411765,18 L19,11 L10.4411765,4 Z'
				fill='#000000'
				fillRule='nonzero'
			></path>
		</svg>
	)
}
