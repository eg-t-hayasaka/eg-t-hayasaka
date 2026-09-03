// soxa attaches the full request config - including the
// `Authorization: bearer <token>` header - onto thrown errors (and even
// defines toJSON() to re-serialize it). Logging a raw error or its `cause`
// can print that token straight into CI logs, so always go through this
// helper to extract just the message instead.
export function safeErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  return String(error);
}
