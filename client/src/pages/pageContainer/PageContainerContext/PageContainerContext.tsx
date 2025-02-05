import React, { ReactNode, useState } from 'react'
import { PageContainerCtx } from './fn/context'

type PageContainerContextProps = {
	children: ReactNode
}

export function PageContainerContext(props: PageContainerContextProps) {
	const { children } = props
	const [pageTitle, setPageTitle] = useState('')

	return <PageContainerCtx.Provider value={{ setPageTitle, pageTitle }}>{children}</PageContainerCtx.Provider>
}

export default PageContainerContext
