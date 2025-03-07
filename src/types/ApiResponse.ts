export type TApiResponseErrorType = {
    code: string
    title: string
    detail: string
    source?: {
        pointer?: string
        parameter?: string
    }
    trace?: object | null
}
export type TApiResponseMeta = {
    timestamp: string
    // processing_time_ms: number;
    rate_limit?: {
        limit: number
        remaining: number
    }
    ip?: 'string'
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
    url: string
}
export type TApiResponseResourceData = {
    id: string
    type: string
    attributes?: object
    relationships?: object
    links?: object
}
export type TApiResponse = {
    // message: string;
    meta: TApiResponseMeta | null
    data: TApiResponseResourceData[] | null
    errors: TApiResponseErrorType[] | null
    links?: unknown[]
    included?: unknown[]
}
