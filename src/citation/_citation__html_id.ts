import { type citation_T } from '@btakita/domain--server--blog'
export function _citation__html_id__new(citation:citation_T) {
  return `citation-${citation.id}`
}
export function _citation__handle__html_id__new(citation:citation_T) {
  return `${_citation__html_id__new(citation)}-handle`
}