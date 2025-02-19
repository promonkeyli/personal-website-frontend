// This file is auto-generated by @hey-api/openapi-ts

export const models_ToolSchema = {
    description: 'Tool represents a tool entity',
    type: 'object',
    properties: {
        category: {
            type: 'string'
        },
        name: {
            type: 'string'
        },
        url: {
            type: 'string'
        }
    }
} as const;

export const models_UserSchema = {
    description: 'User represents a user entity',
    type: 'object',
    properties: {
        password: {
            type: 'string'
        },
        username: {
            type: 'string'
        }
    }
} as const;

export const network_ResponseSchema = {
    type: 'object',
    properties: {
        code: {
            description: '响应码',
            allOf: [
                {
                    '$ref': '#/definitions/network.StatusCode'
                }
            ]
        },
        data: {
            description: '响应数据(可以为空)'
        },
        message: {
            description: '响应描述',
            type: 'string'
        },
        time: {
            description: '响应时间戳',
            type: 'integer'
        }
    }
} as const;

export const network_StatusCodeSchema = {
    type: 'integer',
    enum: [200, 400, 401, 403, 404, 500, 501, 502, 503],
    'x-enum-varnames': ['StatusOK', 'StatusBadRequest', 'StatusUnauthorized', 'StatusForbidden', 'StatusNotFound', 'StatusInternalServerError', 'StatusNotImplemented', 'StatusBadGateway', 'StatusServiceUnavailable']
} as const;