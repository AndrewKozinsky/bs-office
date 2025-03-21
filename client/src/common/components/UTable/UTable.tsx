import React, { ReactNode } from 'react'
import cn from 'classnames'
import './UTable.scss'

type UTableProps = {
	children: ReactNode[]
	block?: boolean
}

export function UTable(props: UTableProps) {
	const { children, block } = props

	const firstElem = children[0]
	const otherElems = children.slice(1)
	return (
		<table className={cn('u-table', block && 'u-table--block')}>
			<thead>{firstElem}</thead>
			<tbody>{otherElems}</tbody>
		</table>
	)
}

type UTableHeadRowProps = {
	sticky?: boolean
	children: ReactNode[]
}

export function UTableHeadRow(props: UTableHeadRowProps) {
	const { sticky, children } = props

	return <tr className={cn('u-table-head-row', sticky && 'u-table-head-row--sticky')}>{children}</tr>
}

type UTableRowProps = {
	children: ReactNode[]
	isRowSelected?: boolean
}

export function UTableRow(props: UTableRowProps) {
	const { children, isRowSelected } = props

	return <tr className={cn('u-table-row', isRowSelected && 'u-table-row--selected')}>{children}</tr>
}

type UTableHeadCellProps = {
	children?: ReactNode
}

export function UTableHeadCell(props: UTableHeadCellProps) {
	const { children = null } = props

	return <td className='u-table-head-cell'>{children}</td>
}

type UTableCellProps = {
	align?: 'left' | 'center' | 'right'
	children?: ReactNode
	className?: string
}

export function UTableCell(props: UTableCellProps) {
	const { align = 'left', children = null, className = '' } = props

	return <td className={cn('u-table-cell', 'u-table-cell--' + align, className)}>{children}</td>
}
