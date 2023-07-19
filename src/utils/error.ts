export function notFoundError() {
  return {
    type: "NotFoundError",
    message: "Elemento no encontrado!",
  };
}

export function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return String(error);
}  
