import { type footnote_T } from '@rappstack/domain--server--blog'
export function _footnote__html_id__new(footnote:footnote_T) {
	return `footnote-${footnote.id}`
}
export function _footnote__handle__html_id__new(citation:footnote_T) {
	return `${_footnote__html_id__new(citation)}-handle`
}
