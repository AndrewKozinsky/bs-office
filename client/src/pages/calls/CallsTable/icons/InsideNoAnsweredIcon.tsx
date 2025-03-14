import React from 'react'

interface IconProps extends React.SVGProps<SVGSVGElement> {}

export function InsideNoAnsweredIcon(props: IconProps) {
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
				d='M11,0 C17.0751322,0 22,4.92486775 22,11 C22,17.0751322 17.0751322,22 11,22 C4.92486775,22 0,17.0751322 0,11 C0,4.92486775 4.92486775,0 11,0 Z M11,1 C5.4771525,1 1,5.4771525 1,11 C1,16.5228475 5.4771525,21 11,21 C16.5228475,21 21,16.5228475 21,11 C21,5.4771525 16.5228475,1 11,1 Z'
				id='Oval-Copy-9'
				fill='#000000'
				fillRule='nonzero'
				stroke='none'
				strokeWidth='1'
			></path>
			<path
				d='M10.4411765,4 L19,11 L10.4411765,18 L10.4411765,13.835443 L4,13.835443 L4,8.16455696 L10.4411765,8.16455696 L10.4411765,4 Z M11.441,6.11 L11.4411765,9.16455696 L5,9.164 L5,12.835 L11.4411765,12.835443 L11.441,15.889 L17.419,11 L11.441,6.11 Z'
				id='Path-2-Copy-15'
				fill='#000000'
				fillRule='nonzero'
				stroke='none'
				strokeWidth='1'
			></path>
		</svg>
	)
}
