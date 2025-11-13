export class MessageHttp {
    public static readonly SUCCESS = {
        CREATED: "Created successfully.",
        OK: "Request successful.",
        NO_CONTENT: "No content to display.",
        DELETED: "Deleted successfully."
    };

    public static readonly ERROR = {
        BAD_REQUEST: "Invalid request.",
        UNAUTHORIZED: "Unauthorized.",
        FORBIDDEN: "Access forbidden.",
        NOT_FOUND: "Not found.",
        CONFLICT: "Resource conflict.",
        GONE: "Resource permanently removed.",
        PRECONDITION_FAILED: "Precondition failed.",
        TOO_MANY_REQUESTS: "Too many requests.",
        INTERNAL_SERVER_ERROR: "Internal server error.",
        SERVICE_UNAVAILABLE: "Service unavailable."
    };
}