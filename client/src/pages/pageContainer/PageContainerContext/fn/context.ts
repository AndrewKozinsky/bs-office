import React, { useContext, useEffect } from 'react'

type PageContainerCtxI = { setPageTitle: (title: string) => void; pageTitle: string }
export const PageContainerCtx = React.createContext<PageContainerCtxI | undefined>(undefined)

export function useGetPageTitle() {
	const res = useContext(PageContainerCtx)

	return res.pageTitle
}

export function useSetPageTitle(pageTitle: string) {
	const res = useContext(PageContainerCtx)

	useEffect(
		function () {
			res.setPageTitle(pageTitle)
		},
		[pageTitle],
	)
}
