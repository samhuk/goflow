import { GFError } from '../gf-error/types'

export type GFResult<TData extends any = any> = [data: TData, err?: GFError]
