import { element, style } from '@mkenzo_8/puffin'

const centeredAlignStyle = style`
	&{
		display:flex;
		justify-content:center;
		align-items:center;
	}
`

const centeredAlign = () => element`<div class="${centeredAlignStyle}"/>`

export default centeredAlign